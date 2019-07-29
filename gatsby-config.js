module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: true,
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Matt Hamlin's Blog`,
    author: `Matt Hamlin`,
    description: `A collection of blog posts.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/immatthamlin`,
      },
      {
        name: `github`,
        url: `https://github.com/hamlim`,
      },
    ],
  },
}
