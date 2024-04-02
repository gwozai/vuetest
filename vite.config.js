import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://myjsapi.gwozai.com', // target host
        ws: true, // proxy websockets 
        changeOrigin: true, // needed for virtual hosted sites
        // pathRewrite: {
        //   '^/api': '' // rewrite path
        // }
        rewrite: (path) => path.replace(/^\/api/, '')

      },
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')

      }
    }
  }
})