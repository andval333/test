import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-ignore
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    server: {
      port: env.PORT,
    },
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        components: fileURLToPath(new URL('./src/components', import.meta.url)),
        layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
        pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
        router: fileURLToPath(new URL('./src/router', import.meta.url)),
        css: fileURLToPath(new URL('./src/css', import.meta.url)),
      },
    },
  };
});
