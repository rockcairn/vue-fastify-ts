import { join } from 'node:path'
import { viteFastify } from '@fastify/vite/plugin'
import vue from '@vitejs/plugin-vue'

export default {
  root: join(import.meta.dirname, 'src/client'),
  plugins: [
    vue(),
    viteFastify()
  ],
  build: {
    emptyOutDir: true,
    outDir: join(import.meta.dirname, 'dist/client'),
  },
};
