import esbuild from 'esbuild';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

console.log('🔨 Building Timeline Image Upload Embed...');

await esbuild.build({
  entryPoints: ['embed/timeline-form-embed.tsx'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  outfile: 'public/timeline-form-embed.js',
  external: [],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
  },
}).then(() => {
  console.log('✅ Timeline embed built successfully!');
  console.log('📦 Output: public/timeline-form-embed.js');
}).catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
