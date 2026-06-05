import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'replace-arrows',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.tsx') || id.endsWith('.ts') || id.endsWith('.jsx') || id.endsWith('.js')) {
          return code.replace(/(?<!-)->/g, '→').replace(/-\&gt;/g, '→');
        }
      }
    },
    react()
  ],
})