import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Voron210/', // Замените на имя вашего репозитория
  plugins: [react()],
})
