const path = require('path')

module.exports = {
  reactStrictMode: true,
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
