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

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Mad Rat</p>
      <a href="https://github.com/mad-rat" title="Mad Rat Github">Github</a>
    </footer>
  )
}

export default Footer
