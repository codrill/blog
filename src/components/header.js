import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

const TitleAndDescription = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescritpion = data.site.siteMetadata.description
  
  return (
    <header style={ {
      textAlign: "center",
    } }>
      <h2>
        <Link to="/">{ siteTitle }</Link>
      </h2>
      <p>{ siteDescritpion }</p>
    </header>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={ graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      ` }
      render={ data => <TitleAndDescription data={ data }/> }
    />
  )
}

export default Header
