import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"


const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext
  const {markdownRemark} = data
  const postTitle = markdownRemark.frontmatter.title
  const postHtml = markdownRemark.html
  
  return (
    <div>
      <Header/>
      
      <h1>{ postTitle }</h1>
      <div className="blogPost" dangerouslySetInnerHTML={{__html: postHtml}}>
      </div>
      
      {prev &&
        <Link to={prev.frontmatter.path}>
          Poprzedni post
        </Link>
      }
  
      {next &&
      <Link to={next.frontmatter.path}>
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
      }
    }
  }
`


export default Template