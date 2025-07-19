import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Change the port to 5000
    host: true // Optional: Enable network URL if you want to access it from other devices on the same network
  },
})
