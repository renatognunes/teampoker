import React from "react"
import styles from "../styles/headerContent.module.scss"
import { Link } from "gatsby"

const HeaderContent = ({
  headerTitle,
  headerButtonText,
  headerURL,
  shouldShowHeaderButton,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headline}>
          <h1>{headerTitle}</h1>
          {shouldShowHeaderButton ? (
            <Link to={headerURL}>
              <button className={styles.button}>{headerButtonText}</button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
