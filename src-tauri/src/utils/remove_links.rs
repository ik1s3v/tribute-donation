use regex::Regex;
pub fn remove_links(text: &str) -> String {
    let url_regex = Regex::new(r"https?://[^\s]+").unwrap();
    url_regex.replace_all(text, "***").into_owned()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_remove_links_with_single_url() {
        let input = "Check this out: https://example.com";
        let expected = "Check this out: ***";
        assert_eq!(remove_links(input), expected);
    }

    #[test]
    fn test_remove_links_with_multiple_urls() {
        let input = "Visit https://example.com and http://test.com for more info.";
        let expected = "Visit *** and *** for more info.";
        assert_eq!(remove_links(input), expected);
    }

    #[test]
    fn test_remove_links_with_no_urls() {
        let input = "This text has no links.";
        let expected = "This text has no links.";
        assert_eq!(remove_links(input), expected);
    }

    #[test]
    fn test_remove_links_with_mixed_content() {
        let input = "Text with https://example.com and some more text.";
        let expected = "Text with *** and some more text.";
        assert_eq!(remove_links(input), expected);
    }

    #[test]
    fn test_remove_links_with_empty_string() {
        let input = "";
        let expected = "";
        assert_eq!(remove_links(input), expected);
    }

    #[test]
    fn test_remove_links_with_partial_url_like_text() {
        let input = "This is not a link: example.com or www.example.com";
        let expected = "This is not a link: example.com or www.example.com";
        assert_eq!(remove_links(input), expected);
    }
}
