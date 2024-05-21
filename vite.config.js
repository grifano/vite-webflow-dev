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
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Define fixed naming patterns for the output files
          entryFileNames: 'assets/script.js',
          chunkFileNames: 'assets/script.js',
          assetFileNames({ name }) {
            if (name && name.endsWith('.css')) {
              return 'assets/styles.css'; // Naming CSS as styles.css
            }
            return 'assets/[name][extname]';
          },
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
