import { defineConfig } from "vite";
import VitePluginVue from "@vitejs/plugin-vue";
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  plugins: [
    VitePluginVue(),
    VitePluginSSR({
      prerender: true
    })
  ]
});
