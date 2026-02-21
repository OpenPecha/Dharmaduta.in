import type { Plugin } from 'vite'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Vite plugin to add .nojekyll file for GitHub Pages deployment
 * This prevents Jekyll from processing the site and fixes MIME type issues
 */
export function nojekyll(): Plugin {
  return {
    name: 'vite-plugin-nojekyll',
    closeBundle() {
      const nojekyllPath = join(process.cwd(), 'dist', '.nojekyll')
      writeFileSync(nojekyllPath, '', 'utf-8')
      console.log('✓ Created .nojekyll file for GitHub Pages')
    },
  }
}
