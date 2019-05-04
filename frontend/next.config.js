require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

const staticRootFiles = [
  'manifest.json',
  'service.worker.js',
];

module.exports = withTypescript(withCSS({
  exportPathMap: async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => {
    if (dev) {
      return defaultPathMap;
    }

    await Promise.all(staticRootFiles.map(
      file => copyFile(path.join(dir, file), path.join(outDir, file))
    ));

    return defaultPathMap;
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),
    ];

    return config;
  }
}));
