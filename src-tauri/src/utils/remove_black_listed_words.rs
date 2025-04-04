use regex::Regex;
pub fn remove_black_listed_words(text: &str, blacklist: &str) -> String {
    let words: Vec<&str> = blacklist.split_whitespace().collect();
    let mut result = text.to_string();

    for &word in &words {
        let pattern = format!(r"\b{}\b", regex::escape(word));
        let re = Regex::new(&pattern).unwrap();
        result = re.replace_all(&result, "***").to_string();
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_remove_black_listed_words_single_word() {
        let text = "This is a bad word.";
        let blacklist = "bad";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a *** word.");
    }

    #[test]
    fn test_remove_black_listed_words_multiple_words() {
        let text = "This is a bad and ugly sentence.";
        let blacklist = "bad ugly";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a *** and *** sentence.");
    }

    #[test]
    fn test_remove_black_listed_words_no_match() {
        let text = "This is a clean sentence.";
        let blacklist = "bad ugly";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a clean sentence.");
    }

    #[test]
    fn test_remove_black_listed_words_partial_match() {
        let text = "This is a badly written sentence.";
        let blacklist = "bad";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a badly written sentence.");
    }

    #[test]
    fn test_remove_black_listed_words_empty_blacklist() {
        let text = "This is a sentence.";
        let blacklist = "";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a sentence.");
    }

    #[test]
    fn test_remove_black_listed_words_empty_text() {
        let text = "";
        let blacklist = "bad ugly";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "");
    }

    #[test]
    fn test_remove_black_listed_words_case_insensitive() {
        let text = "This is a Bad word.";
        let blacklist = "bad";
        let result = remove_black_listed_words(text, blacklist);
        assert_eq!(result, "This is a Bad word."); // Case-sensitive by default
    }
}
