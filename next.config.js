const withMDX = require('@zeit/next-mdx')()
const {mapping} = require('./showcase-manifest')

const routes = Object.keys(mapping)

module.exports = withMDX({
  exportPathMap(defaultPathMap) {
    for(const route of routes) {
      defaultPathMap[`/showcase/${route}`] = {page: '/showcase', query: {item: route}}
    }
    return defaultPathMap
  }
})
