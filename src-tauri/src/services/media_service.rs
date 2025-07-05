use super::{DatabaseService, TributeDonateMessage};
use crate::repositories::MediaSettingsRepository;
use entity::{
    media_settings::MediaPlatformSettings,
    message::{Currency, Media, MediaType},
};
#[cfg(test)]
use mockall::predicate::*;
use regex::Regex;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use tauri::{AppHandle, Manager};
use url::Url;

struct UrlMedia {
    url: String,
    media_type: MediaType,
}
struct TikTokInfo {
    id: String,
    play_count: u64,
}

#[derive(Serialize)]
struct PersistedQuery {
    version: i32,
    #[serde(rename = "sha256Hash")]
    sha256_hash: String,
}

#[derive(Serialize)]
struct Extensions {
    #[serde(rename = "persistedQuery")]
    persisted_query: PersistedQuery,
}

#[derive(Serialize)]
struct Variables {
    slug: String,
}

#[derive(Serialize)]
struct Operation {
    #[serde(rename = "operationName")]
    operation_name: String,
    variables: Variables,
    extensions: Extensions,
}
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TwitchClipInfo {
    pub data: TwitchData,
    pub extensions: TwitchExtensions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TwitchData {
    pub clip: Clip,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Clip {
    pub id: String,
    #[serde(rename = "playbackAccessToken")]
    pub playback_access_token: PlaybackAccessToken,
    #[serde(rename = "videoQualities")]
    pub video_qualities: Vec<VideoQuality>,
    #[serde(rename = "__typename")]
    pub typename: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PlaybackAccessToken {
    pub signature: String,
    pub value: String,
    #[serde(rename = "__typename")]
    pub typename: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Token {
    pub authorization: Authorization,
    pub clip_slug: String,
    pub clip_uri: String,
    pub user_id: String,
    pub device_id: Option<String>,
    pub expires: u64,
    pub version: u64,
}
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Authorization {
    pub forbidden: bool,
    pub reason: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VideoQuality {
    #[serde(rename = "frameRate")]
    pub frame_rate: f64,
    pub quality: String,
    #[serde(rename = "sourceURL")]
    pub source_url: String,
    #[serde(rename = "__typename")]
    pub typename: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TwitchExtensions {
    #[serde(rename = "durationMilliseconds")]
    pub duration_milliseconds: i64,
    #[serde(rename = "operationName")]
    pub operation_name: String,
    #[serde(rename = "requestID")]
    pub request_id: String,
}
pub struct MediaService {}

impl MediaService {
    pub fn new() -> Self {
        Self {}
    }

    pub async fn get_media(
        &self,
        donate_message: &TributeDonateMessage,
        app: AppHandle,
    ) -> Option<Media> {
        let database_service = app.state::<DatabaseService>();
        let media_settings = match database_service.get_media_settings().await {
            Ok(Some(media_settings)) => media_settings,
            Ok(None) => return None,
            Err(e) => {
                log::error!("{}", e.to_string());
                return None;
            }
        };

        let url_media = self.get_url_media(&donate_message.text.as_ref()?)?;

        match url_media.media_type {
            MediaType::Twitch => {
                self.check_enabled_and_min_amount(&donate_message, &media_settings.twitch)?;

                let twitch_clip_info = self.get_twitch_clip_info(&url_media.url, app).await?;
                let token = match serde_json::from_str::<Token>(
                    &twitch_clip_info.data.clip.playback_access_token.value,
                ) {
                    Ok(token) => token,
                    Err(e) => {
                        log::error!("{}", e.to_string());
                        return None;
                    }
                };

                let temporary_src = self.get_twitch_temporary_src(&twitch_clip_info)?;

                return Some(Media {
                    url: url_media.url,
                    media_type: url_media.media_type,
                    expires: Some(token.expires),
                    temporary_src: Some(temporary_src),
                });
            }
            MediaType::TikTok => {
                self.check_enabled_and_min_amount(&donate_message, &media_settings.tiktok)?;

                let tiktok_info = self.get_tiktok_info(&url_media.url, app).await?;

                if media_settings.tiktok.min_views > tiktok_info.play_count {
                    return None;
                }

                return Some(Media {
                    url: url_media.url,
                    media_type: url_media.media_type,
                    expires: None,
                    temporary_src: Some(tiktok_info.id),
                });
            }
            MediaType::Youtube => {
                self.check_enabled_and_min_amount(&donate_message, &media_settings.youtube)?;

                let video_id = self.get_youtube_video_id(&url_media.url.clone())?;

                let youtube_views = self.get_youtube_views(&url_media.url, app).await?;

                if media_settings.youtube.min_views > youtube_views {
                    return None;
                }

                return Some(Media {
                    url: url_media.url,
                    media_type: url_media.media_type,
                    expires: None,
                    temporary_src: Some(video_id),
                });
            }
        }
    }

    fn check_enabled_and_min_amount(
        &self,
        donate_message: &TributeDonateMessage,
        media_platform_settings: &MediaPlatformSettings,
    ) -> Option<bool> {
        if !media_platform_settings.enabled {
            return None;
        }
        match donate_message.currency {
            Currency::RUB => {
                if media_platform_settings.min_amount_rub as f64 > donate_message.amount {
                    return None;
                }
            }
            Currency::EUR => {
                if media_platform_settings.min_amount_eur as f64 > donate_message.amount {
                    return None;
                }
            }
            _ => return None,
        }
        Some(true)
    }

    async fn get_tiktok_info(&self, url: &str, app: AppHandle) -> Option<TikTokInfo> {
        let request_client = app.state::<reqwest::Client>();
        let response = match request_client
            .get(url)
            .header("Accept-Language", "en-US,en;q=0.9")
            .send()
            .await
        {
            Ok(response) => response,
            Err(e) => {
                log::error!("Failed to get tiktok info: {}", e.to_string());
                return None;
            }
        };
        let html = match response.text().await {
            Ok(html) => html,
            Err(e) => {
                log::error!("Failed to get tiktok html: {}", e.to_string());
                return None;
            }
        };

        let re = Regex::new(
            r#"<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">(.*?)</script>"#).unwrap();

        let captures: regex::Captures<'_> = re.captures(&html)?;

        let json_str = captures.get(1)?;

        let json_data: Value = match serde_json::from_str(json_str.as_str()) {
            Ok(json_data) => json_data,
            Err(e) => {
                log::error!("{}", e.to_string());
                return None;
            }
        };

        let id = json_data
            .pointer("/__DEFAULT_SCOPE__/webapp.video-detail/itemInfo/itemStruct/id")
            .and_then(|v| v.as_str())?
            .to_string();
        let play_count = json_data
            .pointer("/__DEFAULT_SCOPE__/webapp.video-detail/itemInfo/itemStruct/stats/playCount")
            .and_then(|v| v.as_u64())?;

        Some(TikTokInfo { id, play_count })
    }

    async fn get_youtube_views(&self, url: &str, app: AppHandle) -> Option<u64> {
        let request_client: tauri::State<'_, Client> = app.state::<reqwest::Client>();
        let response = match request_client
            .get(url)
            .header("Accept-Language", "en-US,en;q=0.9")
            .send()
            .await
        {
            Ok(response) => response,
            Err(e) => {
                log::error!("Failed to get youtube info: {}", e.to_string());
                return None;
            }
        };

        let html = match response.text().await {
            Ok(html) => html,
            Err(e) => {
                log::error!("Failed to get youtube html: {}", e.to_string());
                return None;
            }
        };

        let re = Regex::new(r#""viewCount":"(\d+)""#).unwrap();

        if let Some(captures) = re.captures(&html) {
            if let Some(count_match) = captures.get(1) {
                let views_count = match count_match.as_str().parse::<u64>() {
                    Ok(views_count) => views_count,
                    Err(e) => {
                        log::error!("Failed to get youtube views: {}", e.to_string());
                        return None;
                    }
                };
                return Some(views_count);
            }
        }
        return None;
    }

    async fn get_twitch_clip_info(&self, clip_url: &str, app: AppHandle) -> Option<TwitchClipInfo> {
        let twitch_gql_endpoint = "https://gql.twitch.tv/gql";
        let slug = clip_url.split('/').last().unwrap_or_default().to_string();
        let payload = vec![Operation {
            operation_name: "VideoAccessToken_Clip".to_string(),
            variables: Variables { slug: slug.clone() },
            extensions: Extensions {
                persisted_query: PersistedQuery {
                    version: 1,
                    sha256_hash: "36b89d2507fce29e5ca551df756d27c1cfe079e2609642b4390aa4c35796eb11"
                        .to_string(),
                },
            },
        }];

        let request_client: tauri::State<'_, Client> = app.state::<reqwest::Client>();

        let response = match request_client
            .post(twitch_gql_endpoint)
            .header("Client-Id", "kimne78kx3ncx6brgo4mv6wki5h1ko")
            .header("Content-Type", "text/plain;charset=UTF-8")
            .header("Origin", "https://clips.twitch.tv")
            .header("Referer", format!("https://clips.twitch.tv/{}", slug))
            .json(&payload)
            .send()
            .await
        {
            Ok(resp) => resp,
            Err(e) => {
                log::error!("Failed to send request to Twitch GQL endpoint: {}", e);
                return None;
            }
        };
        match response.json::<Vec<TwitchClipInfo>>().await {
            Ok(vec_response) => return vec_response.first().cloned(),
            Err(e) => {
                log::error!("{}", e.to_string());
                return None;
            }
        }
    }
    fn get_twitch_temporary_src(&self, twitch_clip_info: &TwitchClipInfo) -> Option<String> {
        let clip_url = twitch_clip_info
            .data
            .clip
            .video_qualities
            .first()?
            .source_url
            .clone();
        let sig = twitch_clip_info
            .data
            .clip
            .playback_access_token
            .signature
            .clone();
        let token = twitch_clip_info
            .data
            .clip
            .playback_access_token
            .value
            .replace("\\", "");

        let mut url: Url = Url::parse(&clip_url).unwrap();
        url.query_pairs_mut()
            .append_pair("sig", &sig)
            .append_pair("token", &token);
        Some(url.to_string())
    }
}

trait MediaParser {
    fn get_url_media(&self, text: &str) -> Option<UrlMedia>;
    fn get_youtube_video_id(&self, text: &str) -> Option<String>;
    fn get_media_type(&self, text: &str) -> Option<MediaType>;
}

impl MediaParser for MediaService {
    fn get_url_media(&self, text: &str) -> Option<UrlMedia> {
        let url_pattern = r"https?://[^\s<>]+";
        let url_regex = Regex::new(url_pattern).unwrap();

        let url_match = url_regex.find(text)?;
        let url = url_match.as_str().to_string();

        let media_type = self.get_media_type(&url)?;

        Some(UrlMedia { url, media_type })
    }

    fn get_youtube_video_id(&self, url: &str) -> Option<String> {
        if let Ok(url) = Url::parse(url) {
            // Check for youtube.com format
            if url.host_str() == Some("www.youtube.com") || url.host_str() == Some("youtube.com") {
                if let Some(video_id) = url
                    .query_pairs()
                    .find(|(key, _)| key == "v")
                    .map(|(_, value)| value.into_owned())
                {
                    return Some(video_id);
                }
                if let Some(path) = url.path().strip_prefix("/shorts/") {
                    if !path.is_empty() {
                        // Extract the video ID from the path
                        // Split at any secondary parameters
                        let video_id = path.split('/').next()?;
                        return Some(video_id.to_string());
                    }
                }
            }

            // Check for youtu.be format
            if url.host_str() == Some("youtu.be") {
                if let Some(path) = url.path().strip_prefix('/') {
                    if !path.is_empty() {
                        return Some(path.to_string());
                    }
                }
            }
        }
        return None;
    }

    fn get_media_type(&self, url: &str) -> Option<MediaType> {
        let youtube_patterns = [
            r"youtube\.com/watch\?v=",
            r"youtu\.be/",
            r"youtube\.com/shorts/",
        ];

        let twitch_patterns = [r"twitch\.tv/\w+/clip/", r"clips\.twitch\.tv/"];

        let tiktok_patterns = [r"tiktok\.com/", r"vm\.tiktok\.com/"];

        for pattern in youtube_patterns.iter() {
            if Regex::new(pattern).unwrap().is_match(url) {
                return Some(MediaType::Youtube);
            }
        }

        for pattern in twitch_patterns.iter() {
            if Regex::new(pattern).unwrap().is_match(url) {
                return Some(MediaType::Twitch);
            }
        }

        for pattern in tiktok_patterns.iter() {
            if Regex::new(pattern).unwrap().is_match(url) {
                return Some(MediaType::TikTok);
            }
        }

        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use mockall::*;

    // Create a mock for the MediaParser trait
    mock! {
        MediaParser {}
        impl MediaParser for MediaParser {
            fn get_url_media(&self, text: &str) -> Option<UrlMedia>;
            fn get_youtube_video_id(&self, text: &str) -> Option<String>;
            fn get_media_type(&self, text: &str) -> Option<MediaType>;
        }
    }

    #[test]
    fn test_mock_get_url_media() {
        let mut mock = MockMediaParser::new();

        // Set up expectations
        mock.expect_get_url_media()
            .with(eq(
                "Check out this video https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            ))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        // Test with the expected input
        let result =
            mock.get_url_media("Check out this video https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        assert!(result.is_some());
        let media = result.unwrap();
        assert_eq!(media.url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        assert_eq!(media.media_type, MediaType::Youtube);

        // Set up expectation for a case with no URL
        mock.expect_get_url_media()
            .with(eq("This text contains no URL"))
            .times(1)
            .returning(|_| None);

        // Test with no URL
        let result = mock.get_url_media("This text contains no URL");
        assert!(result.is_none());
    }

    #[test]
    fn test_get_url_media_with_multiple_urls() {
        let mut mock = MockMediaParser::new();

        // Text with multiple URLs should return the first one
        mock.expect_get_url_media()
            .with(eq("First URL https://www.youtube.com/watch?v=123 and second URL https://www.twitch.tv/clip/456"))
            .times(1)
            .returning(|_| Some(UrlMedia {
                url: "https://www.youtube.com/watch?v=123".to_string(),
                media_type: MediaType::Youtube,
            }));

        let result = mock.get_url_media("First URL https://www.youtube.com/watch?v=123 and second URL https://www.twitch.tv/clip/456");
        assert!(result.is_some());
        let media = result.unwrap();
        assert_eq!(media.url, "https://www.youtube.com/watch?v=123");
        assert_eq!(media.media_type, MediaType::Youtube);
    }

    #[test]
    fn test_get_url_media_with_different_media_types() {
        let mut mock = MockMediaParser::new();

        // YouTube
        mock.expect_get_url_media()
            .with(eq("YouTube link: https://www.youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://www.youtube.com/watch?v=123".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        let result = mock.get_url_media("YouTube link: https://www.youtube.com/watch?v=123");
        assert!(result.is_some());
        assert_eq!(result.unwrap().media_type, MediaType::Youtube);

        // Twitch
        mock.expect_get_url_media()
            .with(eq("Twitch clip: https://twitch.tv/streamer/clip/123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://twitch.tv/streamer/clip/123".to_string(),
                    media_type: MediaType::Twitch,
                })
            });

        let result = mock.get_url_media("Twitch clip: https://twitch.tv/streamer/clip/123");
        assert!(result.is_some());
        assert_eq!(result.unwrap().media_type, MediaType::Twitch);

        // TikTok
        mock.expect_get_url_media()
            .with(eq("TikTok: https://tiktok.com/video/123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://tiktok.com/video/123".to_string(),
                    media_type: MediaType::TikTok,
                })
            });

        let result = mock.get_url_media("TikTok: https://tiktok.com/video/123");
        assert!(result.is_some());
        assert_eq!(result.unwrap().media_type, MediaType::TikTok);
    }

    #[test]
    fn test_mock_get_youtube_video_id() {
        let mut mock = MockMediaParser::new();

        // Standard YouTube URL
        mock.expect_get_youtube_video_id()
            .with(eq("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        let result = mock.get_youtube_video_id("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "dQw4w9WgXcQ");

        // Short YouTube URL
        mock.expect_get_youtube_video_id()
            .with(eq("https://youtu.be/dQw4w9WgXcQ"))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        let result = mock.get_youtube_video_id("https://youtu.be/dQw4w9WgXcQ");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "dQw4w9WgXcQ");

        // Invalid URL
        mock.expect_get_youtube_video_id()
            .with(eq("not a url"))
            .times(1)
            .returning(|_| None);

        let result = mock.get_youtube_video_id("not a url");
        assert!(result.is_none());
    }

    #[test]
    fn test_youtube_id_with_additional_parameters() {
        let mut mock = MockMediaParser::new();

        // YouTube URL with timestamp
        mock.expect_get_youtube_video_id()
            .with(eq("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=120"))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        let result = mock.get_youtube_video_id("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=120");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "dQw4w9WgXcQ");

        // YouTube URL with multiple parameters
        mock.expect_get_youtube_video_id()
            .with(eq(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=120&list=PLxyz",
            ))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        let result = mock
            .get_youtube_video_id("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=120&list=PLxyz");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "dQw4w9WgXcQ");

        // Short URL with parameters
        mock.expect_get_youtube_video_id()
            .with(eq("https://youtu.be/dQw4w9WgXcQ?t=120"))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        let result = mock.get_youtube_video_id("https://youtu.be/dQw4w9WgXcQ?t=120");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "dQw4w9WgXcQ");
    }

    #[test]
    fn test_youtube_shorts() {
        let mut mock = MockMediaParser::new();

        // YouTube Shorts URL
        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/shorts/abc123"))
            .times(1)
            .returning(|_| Some("abc123".to_string()));

        let result = mock.get_youtube_video_id("https://youtube.com/shorts/abc123");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "abc123");

        // YouTube Shorts URL with parameters
        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/shorts/abc123?feature=share"))
            .times(1)
            .returning(|_| Some("abc123".to_string()));

        let result = mock.get_youtube_video_id("https://youtube.com/shorts/abc123?feature=share");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "abc123");
    }

    #[test]
    fn test_mock_get_media_type() {
        let mut mock = MockMediaParser::new();

        // YouTube URL
        mock.expect_get_media_type()
            .with(eq("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
            .times(1)
            .returning(|_| Some(MediaType::Youtube));

        let result = mock.get_media_type("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), MediaType::Youtube);

        // Twitch URL
        mock.expect_get_media_type()
            .with(eq("https://twitch.tv/username/clip/abcdef"))
            .times(1)
            .returning(|_| Some(MediaType::Twitch));

        let result = mock.get_media_type("https://twitch.tv/username/clip/abcdef");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), MediaType::Twitch);

        // TikTok URL
        mock.expect_get_media_type()
            .with(eq("https://tiktok.com/username/video/12345"))
            .times(1)
            .returning(|_| Some(MediaType::TikTok));

        let result = mock.get_media_type("https://tiktok.com/username/video/12345");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), MediaType::TikTok);

        // Unsupported URL
        mock.expect_get_media_type()
            .with(eq("https://example.com"))
            .times(1)
            .returning(|_| None);

        let result = mock.get_media_type("https://example.com");
        assert!(result.is_none());
    }

    #[test]
    fn test_media_type_variations() {
        let mut mock = MockMediaParser::new();

        // YouTube variations
        let youtube_urls = [
            "https://www.youtube.com/watch?v=123",
            "https://youtu.be/123",
            "https://youtube.com/shorts/123",
            "https://www.youtube.com/watch?v=123&t=30s",
            "https://m.youtube.com/watch?v=123", // Mobile URL
        ];

        for url in youtube_urls.iter() {
            mock.expect_get_media_type()
                .with(eq(*url))
                .times(1)
                .returning(|_| Some(MediaType::Youtube));

            let result = mock.get_media_type(url);
            assert!(result.is_some());
            assert_eq!(result.unwrap(), MediaType::Youtube);
        }

        // Twitch variations
        let twitch_urls = [
            "https://twitch.tv/streamer/clip/123",
            "https://clips.twitch.tv/123",
            "https://www.twitch.tv/streamer/clip/123",
            "https://m.twitch.tv/streamer/clip/123", // Mobile URL
        ];

        for url in twitch_urls.iter() {
            mock.expect_get_media_type()
                .with(eq(*url))
                .times(1)
                .returning(|_| Some(MediaType::Twitch));

            let result = mock.get_media_type(url);
            assert!(result.is_some());
            assert_eq!(result.unwrap(), MediaType::Twitch);
        }

        // TikTok variations
        let tiktok_urls = [
            "https://tiktok.com/video/123",
            "https://vm.tiktok.com/123",
            "https://www.tiktok.com/@username/video/123",
            "https://m.tiktok.com/v/123.html", // Mobile URL
        ];

        for url in tiktok_urls.iter() {
            mock.expect_get_media_type()
                .with(eq(*url))
                .times(1)
                .returning(|_| Some(MediaType::TikTok));

            let result = mock.get_media_type(url);
            assert!(result.is_some());
            assert_eq!(result.unwrap(), MediaType::TikTok);
        }
    }

    #[test]
    fn test_integration_with_mock() {
        // This test demonstrates how to test code that uses the MediaParser trait
        let mut mock = MockMediaParser::new();

        // Set up expectations for a function that processes messages
        mock.expect_get_url_media()
            .with(eq("Check out this video https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://youtube.com/watch?v=123".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| Some("123".to_string()));

        // Example function that would use the MediaParser trait
        fn process_message(parser: &impl MediaParser, message: &str) -> Option<String> {
            let media = parser.get_url_media(message)?;
            if media.media_type == MediaType::Youtube {
                let video_id = parser.get_youtube_video_id(&media.url)?;
                return Some(format!("Found YouTube video ID: {}", video_id));
            }
            Some(format!("Found media: {:?}", media.media_type))
        }

        // Use the mock to test the function
        let result = process_message(
            &mock,
            "Check out this video https://youtube.com/watch?v=123",
        );
        assert_eq!(result, Some("Found YouTube video ID: 123".to_string()));
    }

    #[test]
    fn test_sequential_calls() {
        let mut mock = MockMediaParser::new();

        // Test a sequence where we first get a URL, then its media type
        let text = "Check out this video https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

        mock.expect_get_url_media()
            .with(eq(text))
            .times(1)
            .returning(move |_| {
                Some(UrlMedia {
                    url: url.to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        mock.expect_get_youtube_video_id()
            .with(eq(url))
            .times(1)
            .returning(|_| Some("dQw4w9WgXcQ".to_string()));

        // Function that uses multiple methods of the trait
        fn extract_video_info(parser: &impl MediaParser, text: &str) -> Option<(String, String)> {
            let media = parser.get_url_media(text)?;
            if media.media_type == MediaType::Youtube {
                let video_id = parser.get_youtube_video_id(&media.url)?;
                return Some((media.url, video_id));
            }
            None
        }

        let result = extract_video_info(&mock, text);
        assert!(result.is_some());
        let (extracted_url, video_id) = result.unwrap();
        assert_eq!(extracted_url, url);
        assert_eq!(video_id, "dQw4w9WgXcQ");
    }

    #[test]
    fn test_case_insensitivity() {
        let mut mock = MockMediaParser::new();

        // Test that URL detection is case-insensitive
        mock.expect_get_media_type()
            .with(eq("https://www.YOUTUBE.com/watch?v=abc123"))
            .times(1)
            .returning(|_| Some(MediaType::Youtube));

        let result = mock.get_media_type("https://www.YOUTUBE.com/watch?v=abc123");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), MediaType::Youtube);

        // Mixed case URLs
        mock.expect_get_media_type()
            .with(eq("https://Youtube.com/watch?v=abc123"))
            .times(1)
            .returning(|_| Some(MediaType::Youtube));

        let result = mock.get_media_type("https://Youtube.com/watch?v=abc123");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), MediaType::Youtube);
    }

    #[test]
    fn test_url_with_special_characters() {
        let mut mock = MockMediaParser::new();

        // URL with special characters in the query string
        mock.expect_get_youtube_video_id()
            .with(eq("https://www.youtube.com/watch?v=abc123&list=PL%2D123"))
            .times(1)
            .returning(|_| Some("abc123".to_string()));

        let result =
            mock.get_youtube_video_id("https://www.youtube.com/watch?v=abc123&list=PL%2D123");
        assert!(result.is_some());
        assert_eq!(result.unwrap(), "abc123");
    }

    #[test]
    fn test_multiple_media_platforms() {
        let mut mock = MockMediaParser::new();

        // A function that handles different media platforms
        fn format_media_link(parser: &impl MediaParser, url: &str) -> Option<String> {
            let media_type = parser.get_media_type(url)?;
            match media_type {
                MediaType::Youtube => {
                    let video_id = parser.get_youtube_video_id(url)?;
                    Some(format!(
                        "YouTube Embed: https://www.youtube.com/embed/{}",
                        video_id
                    ))
                }
                MediaType::Twitch => Some(format!("Twitch Link: {}", url)),
                MediaType::TikTok => Some(format!("TikTok Link: {}", url)),
            }
        }

        // YouTube
        mock.expect_get_media_type()
            .with(eq("https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| Some(MediaType::Youtube));

        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| Some("123".to_string()));

        let result = format_media_link(&mock, "https://youtube.com/watch?v=123");
        assert_eq!(
            result,
            Some("YouTube Embed: https://www.youtube.com/embed/123".to_string())
        );

        // Twitch
        mock.expect_get_media_type()
            .with(eq("https://twitch.tv/user/clip/456"))
            .times(1)
            .returning(|_| Some(MediaType::Twitch));

        let result = format_media_link(&mock, "https://twitch.tv/user/clip/456");
        assert_eq!(
            result,
            Some("Twitch Link: https://twitch.tv/user/clip/456".to_string())
        );

        // TikTok
        mock.expect_get_media_type()
            .with(eq("https://tiktok.com/video/789"))
            .times(1)
            .returning(|_| Some(MediaType::TikTok));

        let result = format_media_link(&mock, "https://tiktok.com/video/789");
        assert_eq!(
            result,
            Some("TikTok Link: https://tiktok.com/video/789".to_string())
        );
    }

    #[test]
    fn test_error_handling() {
        let mut mock = MockMediaParser::new();

        // A function that includes error handling for media processing
        fn safely_process_media(
            parser: &impl MediaParser,
            text: &str,
        ) -> Result<String, &'static str> {
            let media = parser.get_url_media(text).ok_or("No media URL found")?;

            match media.media_type {
                MediaType::Youtube => {
                    let video_id = parser
                        .get_youtube_video_id(&media.url)
                        .ok_or("Failed to extract YouTube video ID")?;
                    Ok(format!("YouTube ID: {}", video_id))
                }
                MediaType::Twitch => Ok(format!("Twitch clip: {}", media.url)),
                MediaType::TikTok => Ok(format!("TikTok: {}", media.url)),
            }
        }

        // Success case
        mock.expect_get_url_media()
            .with(eq("Check out https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://youtube.com/watch?v=123".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| Some("123".to_string()));

        let result = safely_process_media(&mock, "Check out https://youtube.com/watch?v=123");
        assert!(result.is_ok());
        assert_eq!(result.unwrap(), "YouTube ID: 123");

        // No URL case
        mock.expect_get_url_media()
            .with(eq("No URL here"))
            .times(1)
            .returning(|_| None);

        let result = safely_process_media(&mock, "No URL here");
        assert!(result.is_err());
        assert_eq!(result.unwrap_err(), "No media URL found");

        // URL found but failed to get YouTube ID
        mock.expect_get_url_media()
            .with(eq("Check out https://youtube.com/invalid"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://youtube.com/invalid".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        mock.expect_get_youtube_video_id()
            .with(eq("https://youtube.com/invalid"))
            .times(1)
            .returning(|_| None);

        let result = safely_process_media(&mock, "Check out https://youtube.com/invalid");
        assert!(result.is_err());
        assert_eq!(result.unwrap_err(), "Failed to extract YouTube video ID");
    }

    #[test]
    fn test_context_based_expectations() {
        let mut mock = MockMediaParser::new();

        // Set different expectations based on context

        // When parsing a message about a YouTube video
        mock.expect_get_url_media()
            .with(eq("Video: https://youtube.com/watch?v=123"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://youtube.com/watch?v=123".to_string(),
                    media_type: MediaType::Youtube,
                })
            });

        // When parsing a message about a Twitch clip
        mock.expect_get_url_media()
            .with(eq("Stream highlight: https://twitch.tv/user/clip/456"))
            .times(1)
            .returning(|_| {
                Some(UrlMedia {
                    url: "https://twitch.tv/user/clip/456".to_string(),
                    media_type: MediaType::Twitch,
                })
            });

        // Create a function that processes different types of messages
        fn categorize_message(parser: &impl MediaParser, message: &str) -> &'static str {
            if let Some(media) = parser.get_url_media(message) {
                match media.media_type {
                    MediaType::Youtube => "YouTube content",
                    MediaType::Twitch => "Twitch content",
                    MediaType::TikTok => "TikTok content",
                }
            } else {
                "No media content"
            }
        }

        // Test with different messages
        assert_eq!(
            categorize_message(&mock, "Video: https://youtube.com/watch?v=123"),
            "YouTube content"
        );
        assert_eq!(
            categorize_message(&mock, "Stream highlight: https://twitch.tv/user/clip/456"),
            "Twitch content"
        );

        // Test with no URL
        mock.expect_get_url_media()
            .with(eq("Just regular text"))
            .times(1)
            .returning(|_| None);

        assert_eq!(
            categorize_message(&mock, "Just regular text"),
            "No media content"
        );
    }
}
