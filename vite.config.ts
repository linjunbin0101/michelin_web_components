import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/vuetify/vuetify-src')
    }
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['vue', 'vuetify'],
    force: true
  },
  build: {
    outDir: 'docs', // 修改为 'docs'
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})