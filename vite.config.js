import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import laravel from 'laravel-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // laravel([]),
  ],
  build: {
    sourcemap: true
  }
})