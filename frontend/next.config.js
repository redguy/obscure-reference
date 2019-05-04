require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withCSS({
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
