import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@@assets": path.resolve(__dirname, "./src/assets"),
      "@@pages": path.resolve(__dirname, "./src/pages"),
      "@@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    fs: {
      cachedChecks: false,
    },
  },
});
