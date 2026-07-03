import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    // Compresses images at build time (vite build only, not the dev server).
    // PNG uses palette quantization — near-lossless but far smaller for the
    // flat campsite illustrations.
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  server: {
    host: true,        // bind to 0.0.0.0 so Docker exposes the port to the host
    watch: {
      usePolling: true, // Docker Desktop on Windows/macOS doesn't forward inotify events
    },
  },
})
