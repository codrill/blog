import React from "react"
import { Link } from "gatsby"

const SingleCategoryTemplate = ({ data, pageContext }) => {
  const { posts, categoryName } = pageContext
  
  return (
    <div>
      <div>
        Posty w kategorii: <span style={ { fontWeight: 700 } }>{ categoryName }</span>
      </div>
      <div>
        <ul>
          { posts.map((post, index) => {
            return (
              <li key={ `post-${ index }` }>
                <Link to={ post.frontmatter.path }>
                  { post.frontmatter.title }
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default SingleCategoryTemplate