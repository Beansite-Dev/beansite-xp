import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteSingleFile } from "vite-plugin-singlefile"
// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import laravel from 'laravel-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteSingleFile(/* { removeViteModuleLoader: true } */),
    // laravel([]),
  ],
  build: {
    sourcemap: true
  }
})