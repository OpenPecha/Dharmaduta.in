import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { componentTagger } from "lovable-tagger";
import { nojekyll } from "./vite-plugin-nojekyll";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    allowedHosts:true,
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    nojekyll(),
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
