import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    base: '/vite-webflow-dev/', // Ensure this matches your repository name
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: './src/main.js', // Main JS entry point
        },
        output: {
          entryFileNames: 'assets/script.js',
          chunkFileNames: 'assets/script.js',
          assetFileNames({ name }) {
            if (name && name.endsWith('.css')) {
              return 'assets/styles.css'; // Naming CSS as styles.css
            }
            return 'assets/[name][extname]';
          },
          manualChunks: undefined, // Ensure no manual chunking
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
