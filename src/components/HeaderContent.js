import React, { useContext } from "react"
import { LayoutContext } from "../layout/Layout"
import contentStyles from "./content.module.scss"
import { Link } from "gatsby"

const HeaderContent = () => {
  const {
    headerTitle,
    headerButtonText,
    headerURL,
    shouldShowHeaderButton,
  } = useContext(LayoutContext)

  return (
    <div className={contentStyles.container}>
      <div>
        <div className={contentStyles.headline}>
          <h1>{headerTitle}</h1>
          {shouldShowHeaderButton ? (
            <Link to={headerURL}>
              <button className={contentStyles.button}>
                {headerButtonText}
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
