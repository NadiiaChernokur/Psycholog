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
  //   define: {
  //     'process.env': {
  //       VITE_APIKEY: JSON.stringify(process.env.VITE_APIKEY),
  //       AUTHDOMAIN: JSON.stringify(process.env.AUTHDOMAIN),
  //       PROJECTID: JSON.stringify(process.env.PROJECTID),
  //       STORAGEBUCKET: JSON.stringify(process.env.STORAGEBUCKET),
  //       MESSAGINGSENDERID: JSON.stringify(process.env.MESSAGINGSENDERID),
  //       APPID: JSON.stringify(process.env.APPID),
  //       MEASUREMENTID: JSON.stringify(process.env.MEASUREMENTID),
  //     },
  //   },
  base: '/psychologists/',
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
});
