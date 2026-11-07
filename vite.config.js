import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // './' keeps asset URLs relative so the build works from any sub-path
  // (e.g. GitHub Pages) as well as from a domain root.
  base: './',
  plugins: [react()],
});
