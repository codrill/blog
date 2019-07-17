const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createCategoryPages = (createPage, posts) => {
  const allCategoriesIndexTemplate = path.resolve("src/templates/allCategoriesIndex.js")
  const singleCategoryIndexTemplate = path.resolve("src/templates/singleCategoryIndex.js")
  
  const postsByCategory = {}
  
  posts.forEach(({ node }) => {
    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach((category => {
        if (!postsByCategory[category]) {
          postsByCategory[category] = []
        }
        
        postsByCategory[category].push(node)
      }))
    }
  })
  
  const categories = Object.keys(postsByCategory)
  createPage({
    path: "/categories",
    component: allCategoriesIndexTemplate,
    context: {
      categories: categories.sort(),
    },
  })
  
  categories.forEach(categoryName => {
    const posts = postsByCategory[categoryName]
    const categoryWithDashes = categoryName.replace(/\s+/g, '-').toLowerCase()
    
    createPage({
      path: `/categories/${ categoryWithDashes }`,
      component: singleCategoryIndexTemplate,
      context: {
        posts,
        categoryName,
      },
    })
  })
}

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions
  
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")
    
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark (
              sort: {order: ASC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    categories
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges
        
        createCategoryPages(createPage, posts)
        
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node,
            },
          })
          
          resolve()
        })
      }),
    )
  })
})