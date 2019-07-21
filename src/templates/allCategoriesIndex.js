import React from "react"
import { Link } from "gatsby"
import { replaceSpacesWithDashes } from "../utils/string.utils"

const AllCategoriesTemplate = ({ data, pageContext }) => {
  const { categories } = pageContext
  
  return (
    <div>
      <div>
        Lista kategorii:
      </div>
      <div>
        <ul>
          { categories.map((categoryName, index) => {
            const categoryWithDashes = replaceSpacesWithDashes(categoryName)
            return (
              <li key={ `categories-${ index }` }>
                <Link to={ `/categories/${ categoryWithDashes }` }>
                  { categoryName }
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default AllCategoriesTemplate