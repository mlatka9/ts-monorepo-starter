import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   include: ['@fantastic/core'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/@fantastic\/core/, /node_modules/],
  //   },
  // },
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
});
