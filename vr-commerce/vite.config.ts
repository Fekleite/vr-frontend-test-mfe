import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

import { dependencies } from './package.json'

export default defineConfig({
  plugins: [
    federation({
      name: 'vr-commerce',
      remotes: {},
      exposes: {},
      filename: 'remoteEntry.js',
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true
        }
      }
    }),
    react()
  ],
})
