import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {componentTagger} from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
    server: {
        host: "::",
        port: 8080,
        hmr: {
            overlay: false,
        },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'framer-vendor': ['framer-motion'],
                    'lucide-vendor': ['lucide-react'],
                },
            },
        },
        chunkSizeWarningLimit: 600,
        minify: 'esbuild',
        cssMinify: true,
        cssCodeSplit: true,
        terserOptions: mode === 'production' ? {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        } : undefined,
    },
}));
