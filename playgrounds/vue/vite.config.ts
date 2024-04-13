import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import aliasImportChecker from '../../src'

const config = defineConfig({
  plugins: [
    Vue({}),
    aliasImportChecker(),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@common': resolve(__dirname, './src/common'),
      '@hooks': resolve(__dirname, './src/hooks'),
    },
  },
})

export default config
