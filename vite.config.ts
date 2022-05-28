import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^src/,
        replacement: path.resolve(__dirname, 'src/'),
      },
    ],
  },
  plugins: [react()],
})
