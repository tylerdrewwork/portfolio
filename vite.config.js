import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use /repo-name/ if site is at username.github.io/repo-name/
// Use '/' if site is at root (e.g. username.github.io with user/org site or custom domain)
const base = process.env.VITE_BASE_URL ?? '/portfolio-2026/'

export default defineConfig({
  base,
  plugins: [
    react({
      babel: {
        plugins: [
          // other Babel plugins
          [
            "@locator/babel-jsx/dist",
            {
              env: "development",
            },
          ],
        ],
      },
    }),
  ],
})

