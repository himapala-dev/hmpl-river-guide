const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== "production";
const withManifest = require('next-manifest');

const plugin = withPlugins([
  [optimizedImages, {
    images: {
      domains: [
        "picsum.photos",
      ],
    },
  }],
]);

const manifest = withManifest({
  manifest: {
    outout: "/",
    name: "Himapala River Guide",
    short_name: "hmpl-rvr-guide",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#100058",
    orientation: "portrait-primary",
    gcm_sender_id: "",
    gcm_user_visible_only: true,
    permissions: [
      "gcm"
    ],
    "icons": [
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-36x36.png' : "/favicons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-48x48.png' : "/favicons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-72x72.png' : "/favicons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-96x96.png' : "/favicons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-144x144.png' : "/favicons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/android-icon-192x192.png' : "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/meta-logo.png' : "/favicons/meta-logo.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: !debug ? '/hmpl-river-guide/favicons/meta-logo.png' : "/favicons/meta-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  }
})

const nextConfig = {};

module.exports = {
  basePath: !debug ? '/hmpl-river-guide' : '',
  assetPrefix: !debug ? '/hmpl-river-guide' : '',
  withOffline: nextConfig,
  reactStrictMode: true,
  plugin,
  manifest,
  withPWA: {
    pwa: {
      dest: 'public'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_mixins.scss"; @import "_variables.scss";`
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/tentang-kami": { page: "/tentang-kami" },
      "/blog": { page: "/blog" },
      "/river-guide": { page: "/river-guide" },
      "/administrator": { page: "/administrator" },
    }
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
