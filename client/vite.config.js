// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react()],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // target: 'https://real-estate-n723.onrender.com',
        secure: false,
        changeOrigin: true
      },
    },
  },

  plugins: [react()],
});