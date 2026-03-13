import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    minify: false,
    cssMinify: false,
    target: 'esnext',
    rollupOptions: {
      output: {
        // On empêche le renommage des fonctions critiques
        manualChunks: undefined,
      }
    }
  },
  optimizeDeps: {
    include: ['@stacks/connect', '@stacks/network', '@stacks/transactions']
  }
})
