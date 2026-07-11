import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'Study Planner AI',
                short_name: 'StudyPlanner',
                description: 'Aqlli o\'quv rejalashtiruvchisi va AI yordamchisi',
                theme_color: '#6366f1',
                background_color: '#f8fafc',
                display: 'standalone',
                orientation: 'portrait',
                scope: '/',
                start_url: '/',
                categories: ['education', 'productivity'],
                shortcuts: [
                    {
                        name: 'Bugungi Reja',
                        short_name: 'Reja',
                        url: '/dashboard',
                        icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }]
                    },
                    {
                        name: 'Fokus Mode',
                        short_name: 'Fokus',
                        url: '/focus',
                        icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }]
                    },
                    {
                        name: 'Vazifa Qo\'shish',
                        short_name: 'Vazifa',
                        url: '/tasks',
                        icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }]
                    },
                    {
                        name: 'Analitika',
                        short_name: 'Statistika',
                        url: '/progress',
                        icons: [{ src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }]
                    }
                ],
                icons: [
                    {
                        src: 'favicon.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml',
                        purpose: 'any'
                    },
                    {
                        src: 'favicon.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml',
                        purpose: 'any'
                    },
                    {
                        src: 'favicon.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml',
                        purpose: 'maskable'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
                navigateFallback: '/index.html',
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 yil
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            }
        })
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
                        if (id.includes('react/') || id.includes('react-dom/') || id.includes('react-router-dom/')) {
                            return 'vendor';
                        }
                        if (id.includes('@google/generative-ai')) {
                            return 'ai';
                        }
                        if (id.includes('recharts')) {
                            return 'charts';
                        }
                        if (id.includes('react-big-calendar') || id.includes('moment')) {
                            return 'calendar';
                        }
                        if (id.includes('lucide-react')) {
                            return 'icons';
                        }
                        if (id.includes('react-markdown')) {
                            return 'markdown';
                        }
                        if (id.includes('@supabase/supabase-js')) {
                            return 'supabase';
                        }
                    }
                },
            },
        },
        // Chunk size warning limit oshirish
        chunkSizeWarningLimit: 600,
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
        // Caching strategiyasi
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
        },
    },
    // Pre-bundling optimization
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-router-dom',
            '@supabase/supabase-js',
        ],
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: path.resolve(__dirname, './vitest.setup.ts'),
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '.**', '**/*.config.*'],
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
                'tailwind.config.js'
            ]
        }
    },
});
