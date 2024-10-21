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
      name: "vr-cards",
      filename: "remoteEntry.js",
      exposes: {
        "./Cards": "./src/components/Cards",
        "./CardsWrapper": "./src/components/CardsWrapper",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
    react()
  ],
})
