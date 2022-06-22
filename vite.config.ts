import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const { resolve } = require('path')   //   增加

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {   
    alias: [
      {    // 与tsconfig.json的paths对应
        find: "@",
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
})
