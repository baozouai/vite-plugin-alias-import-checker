import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import aliasImportChecker from '../../src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    aliasImportChecker(),
    react(),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@common': resolve('src/common'),
      '@hooks': resolve('src/hooks'),
      // '@gm-common/x-request': resolve('src/request'),
    },
  }
})
