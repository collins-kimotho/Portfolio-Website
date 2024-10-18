// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/Portfolio-Website',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion']
    }
  }
})