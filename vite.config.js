import { defineConfig } from 'vite';

export default defineConfig({
    base: '/telegram-bot/',
    build: {
        outDir: 'docs',
    },
    resolve: {
        alias: {
            fetch: 'whatwg-fetch',
        },
    },
});