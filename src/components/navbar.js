import { Link } from "gatsby"
import React from "react"
import layoutStyles from "./layout.module.scss"
import BackgroundSlider from "gatsby-image-background-slider"
import { graphql, useStaticQuery } from "gatsby"
import Image from "./image"
import classNames from "classnames"

const Header = () => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const inputEl = React.useRef(null)

  let className = classNames(layoutStyles.navBar, {
    [layoutStyles.navBarActive]: isNavbarOpen,
  })

  return (
    <div
      style={{ background: "#323232" }}
      className={layoutStyles.headerWrapper}
    >
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
            <Link to="#">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
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
      {/* </BackgroundSlider> */}
    </div>
  )
}

export default Header
