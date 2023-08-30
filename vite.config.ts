import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    [million.vite({ auto: true}), react()]
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  server: {
    port: 8005
  }
})
