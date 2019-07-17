import React from "react"
import { Link } from "gatsby"

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
            const categoryWithDashes = categoryName.replace(/\s+/g, '-').toLowerCase()
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