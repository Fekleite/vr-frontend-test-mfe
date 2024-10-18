import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ModuleFederationPlugin from "@originjs/vite-plugin-federation";

export default defineConfig({
  build: {
		target: 'chrome89',
    minify: false,
    cssCodeSplit: false,
	},
  plugins: [
    ModuleFederationPlugin({
      name: "vr-commerce",
      filename: "remoteEntry.js",
      remotes: {
        'vr-header': "http://localhost:5174/assets/remoteEntry.js",
        'vr-footer': "http://localhost:5175/assets/remoteEntry.js",
        'vr-cards': "http://localhost:5176/assets/remoteEntry.js",
      },
      exposes: {
        './store': "./src/store"
      },
      shared: ["react", "react-dom", "tailwindcss"]
    }),
    react()
  ],
})
