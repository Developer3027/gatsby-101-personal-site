const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/masonr/working/gatsby-101-personal-site/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/masonr/working/gatsby-101-personal-site/src/pages/index.js")))
}

