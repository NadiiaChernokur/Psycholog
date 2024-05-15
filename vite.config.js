import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  base: '/psychologists',
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
});
