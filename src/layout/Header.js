import { Link } from "gatsby"
import React from "react"
import layoutStyles from "../components/layout.module.scss"
import classNames from "classnames"
import HeaderContent from "../components/HeaderContent"
import Logo from "../components/Logo"
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

  let className = classNames(layoutStyles.navBar, {
    [layoutStyles.navBarActive]: isNavbarOpen,
  })

  return (
    <div
      className={classNames(layoutStyles.headerWrapper, {
        [layoutStyles["navbar__darkmode"]]: !shouldShowHeaderContent,
      })}
    >
      {shouldShowHeaderContent ? (
        <HeaderOverlay headerImages={headerImages} />
      ) : null}
      <nav className={layoutStyles.header}>
        <Link to="/">
          <div className={layoutStyles.logo}>
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
          className={layoutStyles.burgerContainer}
        >
          <input type="checkbox" className={layoutStyles.toggler} />
          <div className={layoutStyles.burger}>
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
