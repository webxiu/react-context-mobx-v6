import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "~": resolve("./"),
    },
  },
}) as UserConfigExport;
