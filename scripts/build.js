const esbuild = require('esbuild');
const copy = require('esbuild-copy-static-files');
const style = require('esbuild-style-plugin');

const args = process.argv.slice(2);

const isBool = (val) => /^(true|false)$/.test(val);

const options = args.reduce((res, arg) => {
  const [key, val] = arg.split('=');

  return { ...res, [key]: isBool(val) ? JSON.parse(val) : val };
}, {});

esbuild.build({
  outdir: 'build',
  plugins: [copy({ src: './public', dest: './build', recursive: true })],
});

esbuild
  .build({
    ...options,
    bundle: true,
    entryPoints: ['src/index.ts'],
    outfile: 'build/index.js',
    format: 'esm',
    plugins: [style()],
  })
  .catch(() => process.exit(1));
