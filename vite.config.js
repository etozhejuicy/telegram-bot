import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "docs",
  },
  server: {
    headers: {
      "/assets/*.js": {
        "Content-Type": "application/javascript",
      },
    },
  },
});
