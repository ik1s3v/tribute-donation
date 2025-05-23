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
			entry: path.join(__dirname, "src-widget/main.tsx"),
			name: "widget",
		},
		emptyOutDir: false,
		sourcemap: false,
		outDir: path.join(__dirname, "src-tauri/dist-widget"),
		rollupOptions: {
			output: {
				entryFileNames: "widget.js",
			},
		},
	},
});
