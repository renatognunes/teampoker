import { Link } from "gatsby"
import React from "react"
import layoutStyles from "./layout.module.scss"
import Image from "./image"

const Header = () => {
  return (
    <div className={layoutStyles.header}>
      <div className={layoutStyles.logo}>
        <Image />
      </div>
      <ul className={layoutStyles.navBar}>
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
    </div>
  )
}

export default Header
