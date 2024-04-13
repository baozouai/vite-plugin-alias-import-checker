import { defineConfig } from 'astro/config'
import inspect from 'vite-plugin-inspect'
import aliasImportChecker from '../../src'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [aliasImportChecker(), inspect()],
  },
})
