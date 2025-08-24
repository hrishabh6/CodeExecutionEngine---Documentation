import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import ViteSitemap from "vite-plugin-sitemap"
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteSitemap({
            hostname: "https://docs.codeexeengine.com", // replace with your domain
            dynamicRoutes: ["/"], // add important docs routes
        }),
    ],    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})