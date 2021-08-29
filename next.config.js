const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa')

const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  withOffline: nextConfig,
  withPWA: {
    pwa : {
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
}
