use std::{fs, path::PathBuf};

pub fn copy_assets_to_static(assets_patch: &PathBuf, static_path: &PathBuf) -> Result<(), String> {
    fs::create_dir_all(&static_path).map_err(|e| {
        log::error!("{}", e.to_string());
        e.to_string()
    })?;
    let dir = fs::read_dir(assets_patch).map_err(|e| {
        log::error!("{}", e.to_string());
        e.to_string()
    })?;
    for entry in dir {
        let entry = entry.unwrap();
        fs::copy(entry.path(), static_path.join(entry.file_name())).map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
    }
    Ok(())
}
#[cfg(test)]
mod tests {
    use tempfile::tempdir;

    use super::*;

    #[test]
    fn test_copy_assets_to_static_success() {
        let temp_dir = tempdir().unwrap();
        let assets_dir = temp_dir.path().join("assets");
        let static_dir = temp_dir.path().join("static");

        // Create assets directory and add test files
        fs::create_dir(&assets_dir).unwrap();
        let file_path = assets_dir.join("test_file.txt");
        fs::write(&file_path, "test content").unwrap();

        // Call the function
        let result = copy_assets_to_static(&assets_dir, &static_dir);

        // Assert success
        assert!(result.is_ok());
        assert!(static_dir.join("test_file.txt").exists());
    }

    #[test]
    fn test_copy_assets_to_static_missing_assets_dir() {
        let temp_dir = tempdir().unwrap();
        let assets_dir = temp_dir.path().join("missing_assets");
        let static_dir = temp_dir.path().join("static");

        // Call the function with a non-existent assets directory
        let result = copy_assets_to_static(&assets_dir, &static_dir);

        // Assert failure
        assert!(result.is_err());
    }

    #[test]
    fn test_copy_assets_to_static_create_static_dir() {
        let temp_dir = tempdir().unwrap();
        let assets_dir = temp_dir.path().join("assets");
        let static_dir = temp_dir.path().join("static");

        // Create assets directory and add test files
        fs::create_dir(&assets_dir).unwrap();
        let file_path = assets_dir.join("test_file.txt");
        fs::write(&file_path, "test content").unwrap();

        // Call the function
        let result = copy_assets_to_static(&assets_dir, &static_dir);

        // Assert success and static directory creation
        assert!(result.is_ok());
        assert!(static_dir.exists());
        assert!(static_dir.join("test_file.txt").exists());
    }

    #[test]
    fn test_copy_assets_to_static_file_copy_error() {
        let temp_dir = tempdir().unwrap();
        let assets_dir = temp_dir.path().join("assets");
        let static_dir = temp_dir.path().join("static");

        // Create assets directory and add a file
        fs::create_dir(&assets_dir).unwrap();
        let file_path = assets_dir.join("test_file.txt");
        fs::write(&file_path, "test content").unwrap();

        // Create static directory and add a read-only file with the same name
        fs::create_dir(&static_dir).unwrap();
        let static_file = static_dir.join("test_file.txt");
        fs::write(&static_file, "existing content").unwrap();
        let mut perms = fs::metadata(&static_file).unwrap().permissions();
        perms.set_readonly(true);
        fs::set_permissions(&static_file, perms).unwrap();

        // Call the function
        let result = copy_assets_to_static(&assets_dir, &static_dir);

        // Assert failure
        assert!(result.is_err());
    }
}
