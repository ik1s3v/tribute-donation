use lingua::Language::{
    Arabic, Chinese, English, French, German, Hindi, Portuguese, Russian, Spanish, Ukrainian,
};
use lingua::{Language, LanguageDetector, LanguageDetectorBuilder};
use std::path::{Path, PathBuf};
use std::sync::Arc;
use tokio::{fs::File, io::AsyncWriteExt};

#[derive(Clone)]

pub struct TTSService {
    audio_path: Arc<PathBuf>,
    language_detector: Arc<LanguageDetector>,
}
impl TTSService {
    pub fn new(audio_path: impl AsRef<Path>) -> Self {
        TTSService {
            audio_path: Arc::new(audio_path.as_ref().to_path_buf()),
            language_detector: Arc::new(
                LanguageDetectorBuilder::from_languages(&[
                    English, French, German, Spanish, Russian, Ukrainian, Portuguese, Hindi,
                    Chinese, Arabic,
                ])
                .build(),
            ),
        }
    }
    pub async fn make_audio(&self, text: &str, file_name: String) -> Result<String, String> {
        let mut audio_bytes = Vec::new();

        for text_parts in self.split_text(text, 100) {
            let language = match self.detect_language(&text_parts) {
                Some(language) => language.iso_code_639_1().to_string(),
                None => "en".to_string(),
            };
            let url = format!(
                "https://translate.google.com/translate_tts?ie=UTF-8&q={}&tl={}&total=1&idx=0&textlen={}&client=tw-ob",
                text_parts,
                language,
                text_parts.chars().count()
            );

            let response = reqwest::get(url).await.map_err(|e| e.to_string())?;
            if !response.status().is_success() {
                return Err(format!(
                    "Failed to get audio from Google TTS: {}",
                    response.status()
                ));
            }

            let bytes = response.bytes().await.map_err(|e| e.to_string())?;
            audio_bytes.extend_from_slice(&bytes);
        }

        let audio_file_path = self.audio_path.join(format!("{}.mp3", file_name));
        let mut file = File::create(audio_file_path)
            .await
            .map_err(|e| e.to_string())?;
        file.write_all(&audio_bytes)
            .await
            .map_err(|e| e.to_string())?;

        Ok(format!("{}.mp3", file_name))
    }

    fn split_text(&self, sentence: &str, max_length: usize) -> Vec<String> {
        let mut result = Vec::new();
        let mut current_part = String::new();

        for word in sentence.split_whitespace() {
            if word.chars().count() > max_length {
                result.push(word.to_string());
                continue;
            }
            if current_part.chars().count()
                + word.chars().count()
                + (if current_part.is_empty() { 0 } else { 1 })
                > max_length
            {
                result.push(current_part);
                current_part = String::new();
            }

            if !current_part.is_empty() {
                current_part.push(' ');
            }

            current_part.push_str(word);
        }

        if !current_part.is_empty() {
            result.push(current_part);
        }

        result
    }
    fn detect_language(&self, text: &str) -> Option<Language> {
        self.language_detector.detect_language_of(text)
    }
}
