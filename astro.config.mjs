// astro.config.mjs
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://borisliao.github.io",
  base: "strong",
  integrations: [AstroPWA(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});