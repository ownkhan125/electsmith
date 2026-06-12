import fs from 'node:fs/promises'
import path from 'node:path'

const PUBLIC_ROOT = path.join(process.cwd(), 'public', 'social-creatives')

/**
 * Reads a creative's raw HTML from disk. Server-only — pages call
 * this and pass the HTML down to the iframe via `srcdoc`, which
 * avoids extra round-trips and works in both dev and production
 * without depending on Next.js's /public file watcher.
 */
export const readCreativeHtml = async (file) => {
  if (typeof file !== 'string' || file.includes('..')) return ''
  const absolute = path.join(PUBLIC_ROOT, file)
  if (!absolute.startsWith(PUBLIC_ROOT)) return ''
  try {
    return await fs.readFile(absolute, 'utf8')
  } catch {
    return ''
  }
}

export const attachHtml = async (posts) =>
  Promise.all(
    posts.map(async (p) => ({
      ...p,
      html: await readCreativeHtml(p.file),
    })),
  )
