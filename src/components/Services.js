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
      image1: file(relativePath: { eq: "services1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "services4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "services2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
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
          <h1>SERVICES</h1>
        </div>
        <div className={ServicesStyles.container}>
          {/* <div> */}
          <div>
            <div style={{ position: "relative" }}>
              <Img
                objectFit="cover"
                imgStyle={{
                  borderRadius: "10px 10px 0px 0px",
                  objectFit: "contain",
                }}
                fluid={data.image1.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>POKER ROOM SOFTWARE</h1>
            <p>
              TeamPoker®{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              Poker Room Software is free for up to 3 tables and 100 players.
              The license is always free for small poker rooms, 501c3 charities,
              and sports team fundraisers.
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
                  borderRadius: "10px 10px 0px 0px",
                }}
                fluid={data.image2.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>POKER ROOMS</h1>
            <p>
              Casinos can purchase the TeamPoker® process for their room for an
              additional $30/month to the CasinoWare basic system fee.{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              is the most professional poker room software available.
            </p>
          </div>
          <div>
            <div>
              <Img
                objectFit="cover"
                imgStyle={{
                  borderRadius: "10px 10px 0px 0px",
                  objectFit: "contain",
                }}
                fluid={data.image3.childImageSharp.fluid}
                alt=""
              />
              {/* <div className={ServicesStyles.overlay}></div> */}
            </div>
            <h1>CHAMPIONSHIP LICENSES</h1>
            <p>
              TeamPoker® Championship Licenses can be purchased directly with
              TeamPoker LLC. We are looking for casinos that want to host
              TeamPoker® Championships for their City, State, or Country.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services
