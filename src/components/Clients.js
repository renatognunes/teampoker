import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import ClientsStyles from "./Clients.module.scss"

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "logo3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "logo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "logo1.jpg" }) {
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
          <h1>Clients we've worked with</h1>
        </div>
        <div className={ClientsStyles.container}>
          {/* <div> */}
          {/* <div> */}
          {/* <div style={{ position: "relative" }}> */}
          <Img
            style={{ width: 280 }}
            // objectFit="cover"
            imgStyle={{
              width: 280,
              flexGrow: 1,
              // borderRadius: "10px 10px 0px 0px",
              // objectFit: "contain",
            }}
            fluid={data.logo1.childImageSharp.fluid}
            alt=""
          />
          {/* <div className={ClientsStyles.overlay}></div> */}
          {/* </div> */}
          {/* <h1>POKER ROOM SOFTWARE</h1>
            <p>
              TeamPoker®{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              Poker Room Software is free for up to 3 tables and 100 players.
              The license is always free for small poker rooms, 501c3 charities,
              and sports team fundraisers.
            </p> */}
          {/* <div className={ClientsStyles.overlay}></div> */}
          {/* </div> */}
          {/* <div className={ClientsStyles.overlay}></div> */}
          {/* <div> */}
          {/* <h1>POKER ROOMS</h1> */}
          {/* <div> */}
          <Img
            style={{ width: 280 }}
            // objectFit="cover"
            imgStyle={{
              width: 280,
              flexGrow: 1,
              // objectFit: "contain",
              // borderRadius: "10px 10px 0px 0px",
            }}
            fluid={data.logo2.childImageSharp.fluid}
            alt=""
          />
          {/* <div className={ClientsStyles.overlay}></div> */}
          {/* </div> */}
          {/* <h1>POKER ROOMS</h1>
            <p>
              Casinos can purchase the TeamPoker® process for their room for an
              additional $30/month to the CasinoWare basic system fee.{" "}
              <a href="https://www.casinoware.net/" target="_blank">
                CasinoWare
              </a>{" "}
              is the most professional poker room software available.
            </p> */}
          {/* </div> */}
          {/* <div> */}
          {/* <div> */}
          <Img
            // objectFit="cover"
            style={{ width: 280 }}
            imgStyle={{
              width: 280,
              flexGrow: 1,
              // borderRadius: "10px 10px 0px 0px",
              // border: "4px solid white",
              // objectFit: "contain",
            }}
            fluid={data.logo3.childImageSharp.fluid}
            alt=""
          />
          {/* <div className={ClientsStyles.overlay}></div> */}
          {/* </div> */}
          {/* <h1>CHAMPIONSHIP LICENSES</h1>
            <p>
              TeamPoker® Championship Licenses can be purchased directly with
              TeamPoker LLC. We are looking for casinos that want to host
              TeamPoker® Championships for their City, State, or Country.
            </p> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Clients
