import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ModuleFederationPlugin from "@originjs/vite-plugin-federation";

export default defineConfig({
  build: {
		target: 'chrome89',
	},
  plugins: [
    ModuleFederationPlugin({
      name: "vr-header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header"
      },
      shared: ["react", "react-dom"],
    }),
    react()
  ],
})
