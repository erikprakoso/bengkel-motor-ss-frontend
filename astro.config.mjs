// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  server: {
    host: true, // ⬅️ WAJIB supaya ngrok bisa akses
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        '.ngrok-free.app', // allow semua subdomain ngrok
      ],
    },
  },

  integrations: [react()],
});
