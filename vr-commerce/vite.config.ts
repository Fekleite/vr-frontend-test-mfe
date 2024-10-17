import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ModuleFederationPlugin from "@originjs/vite-plugin-federation";

export default defineConfig({
  build: {
		target: 'chrome89',
	},
  plugins: [
    ModuleFederationPlugin({
      name: "vr-commerce",
      remotes: {
        'vr-header': "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    }),
    react()
  ],
})
