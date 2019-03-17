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
          posts: require.resolve('./src/components/post-layout.js'),
          recipes: require.resolve('./src/components/HookRecipesLayout.js'),
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts/`,
        ignore: [`**/*.draft.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/src/pages/recipes/`,
        ignore: [`**/*.draft.mdx`],
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
        },
      },
    },
  ],
}
