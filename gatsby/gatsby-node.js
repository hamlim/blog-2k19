const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve(`./src/templates/blog-post.js`)
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(
//               sort: { fields: [frontmatter___date], order: DESC }
//               limit: 1000
//             ) {
//               edges {
//                 node {
//                   fields {
//                     slug
//                   }
//                   frontmatter {
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         // Create blog posts pages.
//         const posts = result.data.allMarkdownRemark.edges

//         posts.forEach((post, index) => {
//           const previous =
//             index === posts.length - 1 ? null : posts[index + 1].node
//           const next = index === 0 ? null : posts[index - 1].node

//           createPage({
//             path: post.node.fields.slug,
//             component: blogPost,
//             context: {
//               slug: post.node.fields.slug,
//               previous,
//               next,
//             },
//           })
//         })
//       })
//     )
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
            component: componentWithMDXScope(
              path.resolve('./src/components/posts-page-layout.js'),
              node.code.scope
            ),
            context: { id: node.id },
          })
        })
      })
    )
  })
}
