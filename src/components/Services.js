import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import ServicesStyles from "./Services.module.scss"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "home-services-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "home-services-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "home-services-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={ServicesStyles.wrapper}>
      <div className={ServicesStyles.content}>
        <div className={ServicesStyles.header}>
          <h1>Market Initiatives</h1>
        </div>
        <div className={ServicesStyles.container}>
          <div>
            <Link to="/services#live-poker">
              <div style={{ position: "relative" }}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  fluid={data.image1.childImageSharp.fluid}
                  alt="Live Poker Room"
                />
              </div>
              <h1>LIVE POKER ROOM SOFTWARE</h1>
              <p>
                Team Poker® offers limited event licensing for single casino
                internal LIVE Poker Rooms now through our existing tournament
                software Partners.
              </p>
            </Link>
          </div>
          <div>
            <Link to="/services#online-poker">
              <div>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  fluid={data.image2.childImageSharp.fluid}
                  alt="Online Poker Room"
                />
              </div>
              <h1>ONLINE POKER ROOMS</h1>
              <p>
                We are looking for ONLINE Poker Rooms to implement the
                TeamPoker® System in their Rooms. Contact us about Requirements
                and licensing.
              </p>
            </Link>
          </div>
          <div>
            <Link to="/services#championship">
              <div>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  fluid={data.image3.childImageSharp.fluid}
                  alt="Championship Licenses"
                />
              </div>
              <h1>CHAMPIONSHIP LICENSES</h1>
              <p>
                Also wanted are Partners for both LIVE and ONLINE Poker Rooms in
                support of The WORLD POKER TEAM CHAMPIONSHIP™ - Annual Series.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
