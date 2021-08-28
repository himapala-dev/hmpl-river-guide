const path = require('path')
const withOffline = require("next-offline");

const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  withOffline: nextConfig,
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
