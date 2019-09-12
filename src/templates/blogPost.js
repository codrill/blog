import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header/header"


const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  
  const postTitle = frontmatter.title
  const postDate = frontmatter.date
  const postCategories = frontmatter.categories.join(", ")
  const postDifficulty = frontmatter.difficulty
  const postHtml = markdownRemark.html
  
  return (
    <div>
      <Header/>
      
      <h1>{ postTitle }</h1>
      <div className="postMeta" style={{ marginBottom: "10px" }}>
        <span style={ { fontWeight: "700" } }>Data: </span>
        <span style={ { padding: "10px" } }>{ postDate }</span>
        
        <span style={ { fontWeight: "700" } }>Kategorie: </span>
        <span style={ { padding: "10px" } }>{ postCategories }</span>
        
        <span style={ { fontWeight: "700" } }>Poziom: </span>
        <span style={ { padding: "10px" } }>{ postDifficulty }</span>
      </div>
      <div className="blogContent" dangerouslySetInnerHTML={ { __html: postHtml } }>
      </div>
      
      { prev &&
      <Link to={ prev.frontmatter.path }>
        Poprzedni post
      </Link>
      }
      
      { next &&
      <Link to={ next.frontmatter.path }>
        Następny post
      </Link>
      }
    
    </div>
  )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark( frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
                date
                difficulty
                categories
            }
        }
    }
`


export default Template