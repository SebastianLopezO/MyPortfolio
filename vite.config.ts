import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {componentTagger} from "lovable-tagger";
import injectPreload from 'vite-plugin-inject-preload';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
    server: {
        host: "::",
        port: 8080,
        hmr: {
            overlay: false,
        },
    },
    plugins: [
        react(),
        /*injectPreload({
            files: [
                {
                    match: /profile-[a-z0-9]+\.webp$/,
                    attributes: {
                        rel: 'preload',
                        as: 'image',
                        fetchpriority: 'high',
                        type: 'image/webp'
                    }
                },
                {
                    match: /.*\.woff2$/,
                    attributes: {
                        rel: 'preload',
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: 'anonymous'
                    }
                }
            ]
        }),*/
        mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        minify: 'esbuild',
        esbuild: {
            drop: mode === 'production' ? ['console', 'debugger'] : [],
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
}));
