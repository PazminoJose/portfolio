import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  vite: {
    plugins: [tailwindcss()]
  }
});