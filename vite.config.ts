/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// @ts-ignore - Vitest test config is supported via tsconfig.node.json types
export default defineConfig({
    plugins: [react()],
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
                    // UI chunk - UI kutubxonalari
                    ui: ['lucide-react', 'recharts', '@hello-pangea/dnd', 'react-big-calendar'],
                    // Supabase chunk
                    supabase: ['@supabase/supabase-js'],
                },
            },
        },
        // Chunk size warning limit oshirish
        chunkSizeWarningLimit: 600,
        // esbuild minification (tezroq va default)
        minify: 'esbuild',
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
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
