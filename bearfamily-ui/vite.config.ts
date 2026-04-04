import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: true,        // bind to 0.0.0.0 so Docker exposes the port to the host
    watch: {
      usePolling: true, // Docker Desktop on Windows/macOS doesn't forward inotify events
    },
  },
})
