import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  build: {
    // LE FIX ABSOLU : On interdit la compression qui casse tout
    minify: false,
    // On s'assure que le code moderne (BigInt, etc.) est supporté par Stacks
    target: 'esnext'
  }
})
