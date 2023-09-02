import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    [million.vite({ auto: true}), react()]
  ],
  server: {
    port: 8005
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
