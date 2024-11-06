import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "134.209.35.249",
    host: "192.168.10.26",
    port: "3000",
  },
})
