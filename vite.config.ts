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
            includeAssets: ['favicon.png', 'apple-touch-icon.png', 'favicon.svg'],
            manifest: {
                name: 'Study Planner',
                short_name: 'StudyPlanner',
                description: 'Intelligent companion for academic success',
                theme_color: '#111827',
                icons: [
                    {
                        src: 'favicon.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'favicon.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'favicon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
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
                manualChunks: {
                    // Vendor chunk - React va asosiy kutubxonalar
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    // AI chunk - AI funksiyalari
                    ai: ['@google/generative-ai'],
                    // Charts chunk - Grafik kutubxonalari (alohida)
                    charts: ['recharts'],
                    // Calendar chunk - Kalendar kutubxonasi (alohida va katta)
                    calendar: ['react-big-calendar', 'moment'],
                    // Icons chunk - Ikonkalar (alohida)
                    icons: ['lucide-react'],
                    // DnD chunk - Drag and Drop
                    dnd: ['@hello-pangea/dnd'],
                    // Markdown chunk
                    markdown: ['react-markdown'],
                    // Supabase chunk
                    supabase: ['@supabase/supabase-js'],
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
        exclude: ['@jitsi/react-sdk'], // Jitsi ni exclude qilamiz chunki katta
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
