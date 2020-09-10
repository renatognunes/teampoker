import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.scss"

const Layout = ({ headerTitle, headerButton, headerURL, children }) => {
  return (
    <div>
      <Header text={headerTitle} buttonText={headerButton} url={headerURL} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  headerTitle: PropTypes.string,
  headerButton: PropTypes.string,
  headerURL: PropTypes.string,
  children: PropTypes.any.isRequired,
}
