import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import { graphql } from "gatsby"
import { Link } from "@reach/router"

// TODO: Implement properly Layout component
// https://trello.com/c/ZN2twpaz

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Cześć</h1>
//     <p>Witamy na naszym nowym blogu</p>
//     <p>Będziemy tutaj pisać o samych świetnych rzeczach</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )


const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  
  return (
    <div>
      <SEO title="Home"/>
      <Header/>
      
      { edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={ frontmatter.path }>
            <Link to={ frontmatter.path }>
              <h4 style={ { marginBottom: "0px" } }>{ frontmatter.title }</h4>
            </Link>
            <p>{ frontmatter.excerpt }</p>
          </div>
        )
      }) }
      
      <div className="categories-link">
        <Link to="categories">Przeglądaj kategorie</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
     ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            date
            path
          }
        }
      }
    }
  }
`

export default IndexPage
