const esbuild = require('esbuild');
const copy = require('esbuild-plugin-copy').default;
const { globPlugin } = require('esbuild-plugin-glob');

const args = process.argv.slice(2);

const isBool = (val) => /^(true|false)$/.test(val);

const options = args.reduce((res, arg) => {
  const [key, val] = arg.split('=');

  return { ...res, [key]: isBool(val) ? JSON.parse(val) : val };
}, {});

esbuild
  .build({
    ...options,
    entryPoints: ['src/*.ts', 'src/**/*.ts'],
    entryNames: '[dir]/[name]',
    outbase: 'src',
    outdir: 'lib',
    format: 'esm',
    plugins: [
      globPlugin(),
      copy({ assets: { from: ['./src/*.css'], to: ['.'] } }),
    ],
  })
  .catch(() => process.exit(1));
