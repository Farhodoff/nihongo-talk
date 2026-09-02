import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';
import { telegramApiPlugin } from './server/vitePlugin.js';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...(process.env.ANALYZE === 'true'
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: 'bundle-analysis.html',
          }),
        ]
      : []),
    react(),
    telegramApiPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Nihongo Talk',
        short_name: 'Nihongo Talk',
        description: "Nihongo Talk — Aqlli yapon tili o'quv platformasi va AI Speaking Coach",
        theme_color: '#E8483A',
        background_color: '#0F1419',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        categories: ['education', 'productivity'],
        shortcuts: [
          {
            name: 'Nihongo Talk',
            short_name: 'Nihongo Talk',
            url: '/jlpt',
            icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }],
          },
          {
            name: 'Nihongo Talk',
            short_name: 'Nihongo Talk',
            url: '/focus',
            icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }],
          },
          {
            name: 'Nihongo Talk',
            short_name: 'Nihongo Talk',
            url: '/flashcards',
            icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }],
          },
          {
            name: 'Nihongo Talk',
            short_name: 'Nihongo Talk',
            url: '/speaking',
            icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }],
          },
        ],
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-pages-cache-v2',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 yil
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build', // Vercel uchun output papkasini 'build' ga o'zgartirish
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react/') ||
              id.includes('react-dom/') ||
              id.includes('react-router-dom/')
            ) {
              return 'vendor';
            }
            if (id.includes('katex')) {
              return 'katex';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('@dnd-kit')) {
              return 'dnd-kit';
            }
          }
          // Separate curriculum data by language to avoid monolithic 1MB bundle
          if (id.includes('/data/curriculum/english')) {
            return 'curriculum-english';
          }
          if (id.includes('/data/curriculum/japanese')) {
            return 'curriculum-japanese';
          }
          if (id.includes('/data/jlptGrammarKanji')) {
            return 'jlpt-grammar-kanji-data';
          }
          if (id.includes('/data/ielts/ielts_grammar_data')) {
            return 'ielts-grammar-data';
          }
        },
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1800,
    // esbuild minification (tezroq va default)
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    // Source map o'chirish (production uchun)
    sourcemap: false,
  },
  // Production build uchun console.log larni olib tashlash
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Faqat console.log va console.warn olib tashlanadi, console.error qoladi
    pure: process.env.NODE_ENV === 'production' ? ['console.log', 'console.warn'] : [],
  },
  // Development server optimizatsiyasi
  server: {
    port: 5173,
    proxy: {
      '/api/deepseek': {
        target: 'https://api.deepseek.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/deepseek/, ''),
      },
    },
    fs: {
      allow: ['..'],
    },
  },
  // Pre-bundling optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@supabase/supabase-js'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './vitest.setup.ts'),
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/e2e/**',
      '.**',
      '**/*.config.*',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test-env.d.ts',
        '**/*.test.{ts,tsx}',
        '**/*.test.{js,jsx}',
        'vite.config.ts',
        'vitest.setup.ts',
        'eslint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
      ],
    },
  },
});
