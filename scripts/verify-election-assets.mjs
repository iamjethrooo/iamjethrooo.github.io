import { createHash } from 'node:crypto'
import { readFile, readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'

// Approved flattened exports, reviewed visually and for metadata/alpha/frames.
// Re-review changed images before updating these hashes; never approve by filename alone.
const approved = new Map(Object.entries({
  'projects/election-1.png': '98f6eaa768435145b09c947a0bdd8f625ca2aeae0574686a588cba0d5e376a41',
  'projects/election-1.webp': '34a38d882974fbcfcbccc8c15ccd4cef4e98aeaef91e4e35ba308ca256073d20',
  'projects/election-2.png': '7742e090806aed61fb78b196dcda65491fce8591e68a8a45965aaf01246216ea',
  'projects/election-2.webp': '98ab0d282c01a7a0c201abe58f2dd14630b242d55e1ae016f4c440502cf1fff4',
  'projects/election-2-thumb.webp': '4539f7c92a51dab658e4129c8c1eb19d9e23ad8c0d62617062312d65a27aaf15',
  'projects/election-3.png': '07e705cfe681c7e39f452b6919a1a7bb36a0dc57caaccfe0df4d27cafe549585',
  'projects/election-3.webp': '55e099ba6e5c7808a53b70df008cedf2556f8370ecf64667921ee169e083dcd0',
}))

async function inspectTree(root, directory = root) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    const publicPath = relative(root, path).replaceAll('\\', '/')
    if (entry.isSymbolicLink() || /(^|\/)(\.private-assets|\.git|\.vercel|\.env(?:\..*)?)(\/|$)|\.(fig|figjam)$/i.test(publicPath)) {
      throw new Error(`Private source or symbolic link found in ${root}; remove it before building.`)
    }
    if (entry.isDirectory()) await inspectTree(root, path)
    else if (/election/i.test(publicPath) && !approved.has(publicPath)) {
      throw new Error(`Unreviewed election asset found in ${root}; privacy review required.`)
    }
  }
}

for (const root of process.argv.length > 2 ? process.argv.slice(2) : ['public', 'dist']) {
  await inspectTree(root)
  for (const [path, expected] of approved) {
    const actual = createHash('sha256').update(await readFile(join(root, path))).digest('hex')
    if (actual !== expected) throw new Error(`Privacy verification failed for ${root}/${path}; re-review the exported image.`)
  }
  console.log(`${root}: all seven approved election exports match; no private source paths found.`)
}
