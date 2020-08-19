import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Services from "./Services"
import About from "./About"
import Clients from "./Clients"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header
        text="WE MAKE POKER A TEAM SPORT"
        buttonText="How It Works"
        url="/about"
      />
      <Services />
      <About />
      <Clients />
      <Footer />
    </>
  )
}

export default Layout
