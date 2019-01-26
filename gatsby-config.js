const mdxFeed = require('gatsby-mdx/feed')

module.exports = {
  siteMetadata: {
    title: 'Matt Hamlin',
  },
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
