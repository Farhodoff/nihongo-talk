/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#e5e7eb',
                accent: '#8b5cf6',
                dark: {
                    bg: '#111827',
                    card: '#1f2937',
                    text: '#f9fafb'
                },
                light: {
                    bg: '#ffffff',
                    card: '#f3f4f6',
                    text: '#1f2937'
                }
            }
        },
    },
    plugins: [],
}
