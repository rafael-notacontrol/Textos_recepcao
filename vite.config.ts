import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Textos Recepção',
        short_name: 'Recepção',
        description: 'Textos de recepção de chamados',
        theme_color: '#2563EB',
        background_color: '#F5F7FB',
        display: 'standalone',

        icons: [
          {
            src: '/cup.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/cup.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
