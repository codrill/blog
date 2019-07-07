import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"


const Template = ({data}) => {
  console.log(data)
  const {markdownRemark} = data
  const postTitle = markdownRemark.frontmatter.title
  const postHtml = markdownRemark.html
  
  return (
    <div>
      <Header/>
      
      <h1>{ postTitle }</h1>
      <div className="blogPost" dangerouslySetInnerHTML={{__html: postHtml}}>
      </div>
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