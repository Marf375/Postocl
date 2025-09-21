import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,        
    strictPort: true,
    hmr: {
      host: 'localhost', 
    } },
     build: {
    outDir: 'public/build',
    emptyOutDir: true,
  },
  plugins: [
    laravel({
      input: ['resources/js/app.jsx','resources/js/api.jsx','resources/js/Pages/Index.jsx','resources/js/Pages/NewArticle.jsx','resources/js/Pages/ArticlePage.jsx','resources/js/Pages/ArticleList.jsx'],
      refresh: true, 
    }),
    react({
    }),
  ],
});