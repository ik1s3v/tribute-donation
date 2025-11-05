import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
	define: {
		"process.env": {
			NODE_ENV: process.env.NODE_ENV,
		},
	},
	plugins: [react()],
	build: {
		lib: {
			formats: ["es"],
			entry: path.join(__dirname, "scr-auc-fighter-adapter/main.tsx"),
			name: "auc-fighter-adapter",
		},
		emptyOutDir: false,
		sourcemap: false,
		outDir: path.join(__dirname, "src-tauri/auc-fighter"),
		rollupOptions: {
			output: {
				entryFileNames: "auc-fighter-adapter.js",
			},
		},
	},
});
