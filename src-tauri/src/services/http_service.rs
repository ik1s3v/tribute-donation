use crate::constants::HTTP_WIDGET_PORT;
use actix_files as fs;
use actix_web::{web, App as ActixApp, HttpServer};
use std::path::PathBuf;

#[derive(Clone, Debug)]
pub struct HttpService {
    widget_path: PathBuf,
    static_path: PathBuf,
}
impl HttpService {
    pub fn new(widget_path: PathBuf, static_path: PathBuf) -> Self {
        Self {
            widget_path,
            static_path,
        }
    }

    pub async fn run(&self) -> Result<(), String> {
        let widget_path = self.widget_path.clone();
        let static_path = self.static_path.clone();
        let server = match HttpServer::new(move || {
            let widget_path = widget_path.clone();
            let static_path = static_path.display().to_string();

            ActixApp::new()
                .service(fs::Files::new("/static", &static_path))
                .service(fs::Files::new("/", widget_path.display().to_string()))
                .default_service(web::get().to(move || {
                    let index_path = widget_path.join("index.html");

                    async move {
                        match fs::NamedFile::open(index_path) {
                            Ok(file) => Ok(file),
                            Err(_) => Err(actix_web::error::ErrorNotFound("File not found")),
                        }
                    }
                }))
        })
        .bind(("127.0.0.1", HTTP_WIDGET_PORT))
        {
            Ok(server) => server,
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        }
        .run();

        tauri::async_runtime::spawn(server);
        Ok(())
    }
}
