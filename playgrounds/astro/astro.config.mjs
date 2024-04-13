import { defineConfig } from 'astro/config'
import inspect from 'vite-plugin-inspect'
import baseConfig from '../vite.config'
import aliasImportChecker from '../../src'
import { mergeConfig } from 'vite'
import { resolve } from 'node:path'

// https://astro.build/config
export default defineConfig({
  vite: mergeConfig(baseConfig, {
    plugins: [aliasImportChecker(), inspect()],
    resolve: {
      alias: {
        '@': resolve(process.cwd(), './src'),
        '@common': resolve(process.cwd(), './src/common'),
        '@hooks': resolve(process.cwd(), './src/hooks'),
      },
    },
  })
})
