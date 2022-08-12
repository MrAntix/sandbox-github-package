import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'gpr-components',
  sourceMap: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: true,
      copy: [
        { src: 'assets', dest: '../assets' }
      ]
    },
    {
      type: 'dist-custom-elements',
      empty: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: './www/docs.json'
    },
    {
      type: 'www',
      serviceWorker: null,
      empty: true
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/assets/components.scss'],
    }),
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]    
  },
  globalStyle: 'src/global/style.scss',
  globalScript: 'src/global/default.js'
};
