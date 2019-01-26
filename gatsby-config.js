const mdxFeed = require('gatsby-mdx/feed')

module.exports = {
  siteMetadata: {
    title: 'Matt Hamlin',
  },
  plugins: [
    'gatsby-mdx',
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
