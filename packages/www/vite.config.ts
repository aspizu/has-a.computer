import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import {tanstackRouter} from "@tanstack/router-plugin/vite"
import {fileURLToPath} from "node:url"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [tanstackRouter(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
})
