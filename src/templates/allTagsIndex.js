import React from "react"
import { Link } from "gatsby"

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext
  
  return (
    <div>
      <div>
        Lista kategorii:
      </div>
      <div>
        <ul>
          { tags.map((tagName, index) => {
            return (
              <li key={ `tag-${ index }` }>
                <Link to={ `/tags/${ tagName }` }>
                  { tagName }
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate