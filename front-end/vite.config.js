import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5193,           // 👈 Fixed frontend port
    strictPort: true,     // 👈 If port is taken, throw error instead of using random one
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
      '/admin': {
        target: 'http://localhost:5174',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/admin/, '')
      }
    }
  }
});
