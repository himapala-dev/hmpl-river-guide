const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== "production";

const plugin = withPlugins([
  [optimizedImages, {
    images: {
      domains: [
        "picsum.photos",
      ],
    },
  }],
]);

const nextConfig = {};

module.exports = {
  basePath: !debug ? '/hmpl-river-guide' : '',
  assetPrefix: !debug ? '/hmpl-river-guide' : '',
  withOffline: nextConfig,
  reactStrictMode: true,
  plugin,
  withPWA: {
    pwa: {
      dest: 'public'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_mixins.scss"; @import "_variables.scss";`
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/tentang-kami": { page: "/tentang-kami" },
      "/tentang-kami/sejarah": { page: "/tentang-kami/sejarah" },
      "/tentang-kami/pengurus": { page: "/tentang-kami/pengurus" },
      "/tentang-kami/kontak": { page: "/tentang-kami/kontak" },
      "/tentang-kami/rekamjejak": { page: "/tentang-kami/rekamjejak" },
      "/tentang-kami/syarat": { page: "/tentang-kami/syarat" },
      "/tentang-kami/privasi": { page: "/tentang-kami/privasi" },
      "/tentang-kami/disclaimer": { page: "/tentang-kami/disclaimer" },
      "/blog": { page: "/blog" },
      "/river-guide": { page: "/river-guide" },
      "/administrator": { page: "/administrator" },
    }
  }
}
