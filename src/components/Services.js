import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import ServicesStyles from "./Services.module.scss"

// export const data = useStaticQuery(graphql`
//   query {
//     fileName: file(relativePath: { eq: "images/software-services.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `);

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "services9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "services7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "services10.jpg" }) {
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
          {/* <div> */}
          <div>
            <div style={{ position: "relative" }}>
              <Img
                objectFit="cover"
                imgStyle={{
                  // borderRadius: "10px 10px 0px 0px",
                  objectFit: "contain",
                }}
                fluid={data.image2.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>LIVE POKER ROOM SOFTWARE</h1>
            <p>
              Team Poker® offers limited licensing for live poker room events
              now through our software partners for their events.
              {/* TeamPoker®{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              Poker Room Software is free for up to 3 tables and 100 players. */}
              {/* The license is always free for small poker rooms, 501c3 charities,
              and sports team fundraisers. */}
            </p>
            {/* <div className={ServicesStyles.overlay}></div> */}
          </div>
          {/* <div className={ServicesStyles.overlay}></div> */}
          <div>
            {/* <h1>POKER ROOMS</h1> */}
            <div>
              <Img
                objectFit="cover"
                imgStyle={{
                  objectFit: "contain",
                  // borderRadius: "10px 10px 0px 0px",
                }}
                fluid={data.image3.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>ONLINE POKER ROOMS</h1>
            <p>
              {/* We are looking for more partners for both LIVE and ONLINE
              TeamPoker®. Contact us about Licensing. */}
              We are looking for ONLINE poker rooms to implement TeamPoker® in
              their poker rooms. Contact us about licensing.
              {/* Casinos can purchase the TeamPoker® process for their rooms or
              partnership for both live and online TeamPoker® events. Contact us
              for licensing and partnerships. */}
              {/* additional $30/month to the CasinoWare basic system fee.{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              is the most professional poker room software available. */}
            </p>
          </div>
          <div>
            <div>
              <Img
                objectFit="cover"
                imgStyle={{
                  // borderRadius: "10px 10px 0px 0px",
                  // border: "4px solid white",
                  objectFit: "contain",
                }}
                fluid={data.image1.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>CHAMPIONSHIP LICENSES</h1>
            <p>
              We also are looking for partners for both LIVE and ONLINE poker
              rooms in support of The World Team Poker Championship™.
              {/* We also want to partner with live casinos and online poker rooms
              for the World Team Poker Championship™ Series. Contact us for more
              details about licensing TeamPoker®. */}
              {/* We also want to Partner with LIVE CASINOS and ONLINE Poker Rooms.
              Contact us about Licensing. */}
              {/* TeamPoker® Championship Licenses can be purchased directly with
              TeamPoker LLC. */}
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services
