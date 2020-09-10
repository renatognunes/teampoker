import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import ClientsStyles from "../../styles/Clients.module.scss"

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "logo-casinoware.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "logo-apt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "logo-check.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={ClientsStyles.wrapper}>
      <div className={ClientsStyles.content}>
        <div className={ClientsStyles.header}>
          <h1>Our Partners</h1>
        </div>
        <div className={ClientsStyles.container}>
          <Link to="/partners#casinoware">
            <Img
              style={{ width: 280 }}
              imgStyle={{
                width: 280,
                flexGrow: 1,
              }}
              fluid={data.logo1.childImageSharp.fluid}
              alt="CasinoWare Logo"
            />
          </Link>
          <Link to="/partners#apt">
            <Img
              style={{ width: 280 }}
              imgStyle={{
                width: 280,
                flexGrow: 1,
              }}
              fluid={data.logo2.childImageSharp.fluid}
              alt="APT Live Logo"
            />
          </Link>
          <Link to="/partners#checkraise">
            <Img
              style={{ width: 280 }}
              imgStyle={{
                width: 280,
                flexGrow: 1,
              }}
              fluid={data.logo3.childImageSharp.fluid}
              alt="Check Raise Logo"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Clients
