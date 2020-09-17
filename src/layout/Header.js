import React from "react"
import styles from "../styles/header.module.scss"
import { Link } from "gatsby"
import classNames from "classnames"
import Logo from "../components/Logo"
import HeaderContent from "../components/HeaderContent"
import HeaderOverlay from "../components/HeaderOverlay"

const Header = ({
  headerTitle,
  headerButtonText,
  headerURL,
  headerImages,
  shouldShowHeaderContent,
  shouldShowHeaderButton,
}) => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const inputEl = React.useRef(null)

  let className = classNames(styles.navBar, {
    [styles.navBarActive]: isNavbarOpen,
  })

  return (
    <div
      className={
        !shouldShowHeaderContent ? styles["navbar__darkmode"] : undefined
      }
    >
      {shouldShowHeaderContent ? (
        <HeaderOverlay headerImages={headerImages} />
      ) : null}
      <nav className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <ul ref={inputEl} className={className}>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div
          role="button"
          onClick={() => changeNavbar(!isNavbarOpen)}
          onKeyDown={() => changeNavbar(!isNavbarOpen)}
          tabIndex={0}
          className={styles.burgerContainer}
        >
          <input type="checkbox" className={styles.toggler} />
          <div className={styles.burger}>
            <div></div>
          </div>
        </div>
      </nav>
      {shouldShowHeaderContent ? (
        <HeaderContent
          headerTitle={headerTitle}
          headerButtonText={headerButtonText}
          headerURL={headerURL}
          shouldShowHeaderButton={shouldShowHeaderButton}
        />
      ) : null}
    </div>
  )
}

export default Header
