import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.scss"

export const LayoutContext = React.createContext()

const initialState = {
  headerTitle: "",
  headerButtonText: "",
  headerURL: "",
  shouldShowHeaderButton: false,
  shouldShowHeaderContent: true,
}

const Layout = ({
  headerTitle,
  headerButtonText,
  headerURL,
  shouldShowHeaderContent,
  shouldShowHeaderButton,
  children,
}) => {
  const [headerProps, setHeaderProps] = useState(initialState)

  useEffect(() => {
    setHeaderProps({
      headerTitle,
      headerButtonText,
      headerURL,
      shouldShowHeaderButton,
      shouldShowHeaderContent,
    })
  }, [
    headerTitle,
    headerButtonText,
    headerURL,
    shouldShowHeaderButton,
    shouldShowHeaderContent,
  ])

  return (
    <div>
      <LayoutContext.Provider value={headerProps}>
        <Header />
      </LayoutContext.Provider>
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
