fn main() {
    dotenvy::dotenv().ok();

    let api_id: i32 = std::env::var("API_ID")
        .expect("API_ID must be set")
        .parse()
        .expect("API_ID must be a valid i32");

    let api_hash: String = std::env::var("API_HASH").expect("API_HASH must be set");

    let client_id: String =
        std::env::var("TWITCH_CLIENT_ID").expect("TWITCH_CLIENT_ID must be set");
    println!("cargo:rustc-env=API_ID={}", api_id);

    println!("cargo:rustc-env=API_HASH={}", api_hash);

    println!("cargo:rustc-env=TWITCH_CLIENT_ID={}", client_id);
    tauri_build::build()
}
