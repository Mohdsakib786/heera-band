import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ensure correct asset paths on GitHub Pages under /heera-band/
  base: '/heera-band/',
  plugins: [react()],
})
