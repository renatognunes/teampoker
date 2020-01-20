import { Link } from "gatsby"
import React from "react"
import layoutStyles from "./layout.module.scss"
import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"

const Header = () => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const inputEl = React.useRef(null)
  const navSlide = () => {
    changeNavbar(!isNavbarOpen)
  }

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
        onClick={() => navSlide()}
        onKeyDown={() => navSlide()}
        tabIndex={0}
        className={layoutStyles.burger}
      >
        <div className={layoutStyles.line1}></div>
        <div className={layoutStyles.line2}></div>
        <div className={layoutStyles.line3}></div>
      </div>
      {/* <div className={layoutStyles.check}>
        <input type="checkbox" className={layoutStyles.checkInput} id="check" />
        <div for="check">
          <FontAwesomeIcon className={layoutStyles.checkbtn} icon={faBars} />
        </div>
      </div> */}
    </nav>
  )
}

export default Header
