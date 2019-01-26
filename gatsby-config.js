const mdxFeed = require('gatsby-mdx/feed')

module.exports = {
  siteMetadata: {
    title: 'Matt Hamlin',
  },
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
