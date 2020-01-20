import { Link } from "gatsby"
import React from "react"
import layoutStyles from "./layout.module.scss"
import Image from "./image"
import classNames from "classnames"

const Header = () => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const inputEl = React.useRef(null)

  let className = classNames(layoutStyles.navBar, {
    [layoutStyles.navBarActive]: isNavbarOpen,
  })

  return (
    <nav className={layoutStyles.header}>
      <div className={layoutStyles.logo}>
        <Image />
      </div>
      <ul ref={inputEl} className={className}>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Partners</Link>
        </li>
        <li>
          <Link to="#">About</Link>
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
  )
}

export default Header
