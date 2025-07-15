import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Usar '/' para rutas correctas en producción
  plugins: [react()]
})
