const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {};

module.exports = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/himapala-dev/hmpl-river-guide/' : '',
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
  withPlugins: {
    optimizedImages,
  },
}
