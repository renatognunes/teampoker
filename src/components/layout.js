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
  //   const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <>
      <Header />
      <Services />
      <About />
      <Clients />
      <Footer />
    </>
    //       <Header />
    //       <div
    //         style={{
    //           margin: `0 auto`,
    //           maxWidth: 960,
    //           padding: `0px 1.0875rem 1.45rem`,
    //           paddingTop: 0,
    //         }}
    //       >
    //         <main>{children}</main>
    //         <footer>
    //           © {new Date().getFullYear()}, Built with
    //           {` `}
    //           <a href="https://www.gatsbyjs.org">Gatsby</a>
    //         </footer>
    //       </div>
    //     </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
