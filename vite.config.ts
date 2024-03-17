import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
// import ssr from "vite-plugin-ssr/plugin";
import path from "path";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/vercel/styled-jsx
    ["styled-jsx/babel", { optimizeForSpeed: true }],
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
      "~": resolve("./"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 1221,
  },
}) as UserConfigExport;
