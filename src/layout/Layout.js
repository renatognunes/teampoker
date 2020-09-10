import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.scss"

const Layout = ({
  headerTitle,
  headerButtonText,
  headerURL,
  headerImages,
  shouldShowHeaderContent,
  shouldShowHeaderButton,
  children,
}) => {
  return (
    <div>
      <Header
        headerTitle={headerTitle}
        headerButtonText={headerButtonText}
        headerURL={headerURL}
        headerImages={headerImages}
        shouldShowHeaderContent={shouldShowHeaderContent}
        shouldShowHeaderButton={shouldShowHeaderButton}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  headerTitle: PropTypes.string,
  headerButtonText: PropTypes.string,
  headerURL: PropTypes.string,
  shouldShowHeaderButton: PropTypes.bool,
  shouldShowHeaderContent: PropTypes.bool,
  children: PropTypes.any.isRequired,
}
