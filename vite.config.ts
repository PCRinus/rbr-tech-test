import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@@assets": path.resolve(__dirname, "./src/assets"),
      "@@pages": path.resolve(__dirname, "./src/pages"),
      "@@components": path.resolve(__dirname, "./src/components"),
      "@@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    fs: {
      cachedChecks: false,
    },
  },
});
