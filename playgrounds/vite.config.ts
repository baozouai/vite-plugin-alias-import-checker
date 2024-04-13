import { defineConfig } from "vite";
import enhanceLog from 'vite-plugin-enhance-log'
export default defineConfig({
  resolve: {
    alias: {
      '@': 'src',
      '@common': 'src/common',
      '@hooks': 'src/hooks',
    },
  },
  plugins: [
    enhanceLog({
      colorFileName: true
    })
  ]
})