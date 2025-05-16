import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://dulces-petalos.jakala.es',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
