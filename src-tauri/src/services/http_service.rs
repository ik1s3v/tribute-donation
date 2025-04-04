use crate::constants::HTTP_WIDGET_PORT;
use actix_files as fs;
use actix_web::{web, App as ActixApp, HttpServer};
use std::{
    path::{Path, PathBuf},
    sync::Arc,
};

#[derive(Clone, Debug)]
pub struct HttpService {
    widget_path: Arc<PathBuf>,
    static_path: Arc<PathBuf>,
}
impl HttpService {
    pub fn new(widget_path: impl AsRef<Path>, static_path: impl AsRef<Path>) -> Self {
        Self {
            widget_path: Arc::new(widget_path.as_ref().to_path_buf()),
            static_path: Arc::new(static_path.as_ref().to_path_buf()),
        }
    }

    pub async fn run(&self) -> Result<(), String> {
        let widget_path = Arc::clone(&self.widget_path);
        let static_path = Arc::clone(&self.static_path);
        let server = match HttpServer::new(move || {
            let widget_path = Arc::clone(&widget_path);
            let static_path = static_path.display().to_string();

            ActixApp::new()
                .service(fs::Files::new("/static", &static_path))
                .service(fs::Files::new("/", (*widget_path).clone()))
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
