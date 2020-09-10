import { Link } from "gatsby"
import React, { useContext } from "react"
import { LayoutContext } from "./Layout"
import layoutStyles from "../components/layout.module.scss"
import classNames from "classnames"
import HeaderContent from "../components/HeaderContent"
import Image from "../components/image"
import HeaderOverlay from "../components/HeaderOverlay"

const Header = () => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const { shouldShowHeaderContent } = useContext(LayoutContext)
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
      {shouldShowHeaderContent ? <HeaderOverlay /> : null}
      <nav className={layoutStyles.header}>
        <Link to="/">
          <div className={layoutStyles.logo}>
            <Image />
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
      {shouldShowHeaderContent ? <HeaderContent /> : null}
    </div>
  )
}

export default Header
