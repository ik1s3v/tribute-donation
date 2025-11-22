use entity::donation::Currency;

pub fn get_currency_from_string(currency: Option<String>) -> Currency {
    match currency {
        Some(value) => match value.to_lowercase().as_str() {
            "eur" => return Currency::EUR,
            "rub" => return Currency::RUB,
            "usd" => return Currency::USD,
            _ => return Currency::NONE,
        },
        None => return Currency::NONE,
    }
}
