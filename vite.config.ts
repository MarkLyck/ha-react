import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/main.js',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^src/,
        replacement: path.resolve(__dirname, 'src/'),
      },
    ],
  },
  plugins: [svgr(), react()],
})
