use entity::settings::Currency;
use regex::Regex;

use crate::services::TributeDonateMessage;

pub fn parse_message_to_tribute_donate_message(
    text: &str,
    id: i32,
) -> Option<TributeDonateMessage> {
    let donate_regex = Regex::new(r"(€|₽|\$)(\d+(\.\d{1,2})?)").unwrap();
    let user_regex = Regex::new(r"User @([^\s]+)|Пользователь ([^\s]+)").unwrap();
    let message_regex = Regex::new(r"(Сообщение:|Message:)\s*(.+)").unwrap();

    let donate_data = donate_regex.captures(&text).and_then(|caps| {
        let currency = caps.get(1).map(|m| match m.as_str() {
            "€" => Currency::EUR,
            "₽" => Currency::RUB,
            "$" => Currency::USD,
            _ => Currency::NONE,
        });
        let amount = caps
            .get(2)
            .map(|m| m.as_str().parse::<f64>().ok())
            .flatten();
        amount.zip(currency)
    });

    let user = user_regex.captures(&text).and_then(|caps| {
        caps.get(1)
            .or_else(|| caps.get(2))
            .map(|m| m.as_str().to_string())
    });
    let mut message_content = None;
    for caps in message_regex.captures_iter(&text) {
        if let Some(content) = caps.get(2) {
            message_content = Some(content.as_str().trim().to_string());
        }
    }

    if let (Some((amount, currency)), Some(user)) = (donate_data, user) {
        Some(TributeDonateMessage {
            id,
            user_name: user,
            text: message_content,
            amount,
            currency,
        })
    } else {
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use entity::settings::Currency;

    #[test]
    fn test_parse_valid_message_with_euro() {
        let text = "User @john_doe €50.25 Сообщение: Thank you!";
        let id = 1;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_some());
        let message = result.unwrap();
        assert_eq!(message.id, id);
        assert_eq!(message.user_name, "john_doe");
        assert_eq!(message.amount, 50.25);
        assert_eq!(message.currency, Currency::EUR);
        assert_eq!(message.text, Some("Thank you!".to_string()));
    }

    #[test]
    fn test_parse_valid_message_with_ruble() {
        let text = "Пользователь Иван ₽1000 Сообщение: Спасибо!";
        let id = 2;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_some());
        let message = result.unwrap();
        assert_eq!(message.id, id);
        assert_eq!(message.user_name, "Иван");
        assert_eq!(message.amount, 1000.0);
        assert_eq!(message.currency, Currency::RUB);
        assert_eq!(message.text, Some("Спасибо!".to_string()));
    }

    #[test]
    fn test_parse_message_without_amount() {
        let text = "User @jane_doe Сообщение: Hello!";
        let id = 3;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_none());
    }

    #[test]
    fn test_parse_message_without_user() {
        let text = "€20 Сообщение: Anonymous donation";
        let id = 4;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_none());
    }

    #[test]
    fn test_parse_message_with_partial_data() {
        let text = "User @partial_user €30";
        let id = 5;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_some());
        let message = result.unwrap();
        assert_eq!(message.id, id);
        assert_eq!(message.user_name, "partial_user");
        assert_eq!(message.amount, 30.0);
        assert_eq!(message.currency, Currency::EUR);
        assert_eq!(message.text, None);
    }

    #[test]
    fn test_parse_message_with_dollar_currency() {
        let text = "User @dollar_user $15.50 Сообщение: Great work!";
        let id = 6;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_some());
        let message = result.unwrap();
        assert_eq!(message.id, id);
        assert_eq!(message.user_name, "dollar_user");
        assert_eq!(message.amount, 15.50);
        assert_eq!(message.currency, Currency::USD);
        assert_eq!(message.text, Some("Great work!".to_string()));
    }

    #[test]
    fn test_parse_message_with_invalid_currency() {
        let text = "User @invalid_user ¥100 Сообщение: Invalid currency!";
        let id = 7;
        let result = parse_message_to_tribute_donate_message(text, id);

        assert!(result.is_none());
    }
}
