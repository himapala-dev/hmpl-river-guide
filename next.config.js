const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const plugin = withPlugins([
  [optimizedImages,],
  {
    basePath: '/hmpl-river-guide',
    assetPrefix: '/hmpl-river-guide/',
  },
]);

const nextConfig = {};

module.exports = {
  withOffline: nextConfig,
  reactStrictMode: true,
  withPWA: {
    pwa: {
      dest: 'public'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_mixins.scss"; @import "_variables.scss";`
  },
  images: {
    domains: [
      "picsum.photos",
    ],
  },
  plugin,
}
