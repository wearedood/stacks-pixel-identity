import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: '/stacks-pixel-identity/',
  plugins: [
    react(),
    nodePolyfills(),
  ],
  define: {
    global: 'window',
  },
  build: {
    minify: false,
    target: 'esnext'
  }
})
