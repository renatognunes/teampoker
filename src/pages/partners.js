import React from "react"
import { Link } from "gatsby"
import PartnersStyles from "../components/PartnersPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

const Partners = props => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "logo-casinoware.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "logo-apt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "logo-check.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        buttonText="Become a Partner"
        image="partners-bg.jpg"
        text={<span>OUR PARTNERS</span>}
        hideButton={false}
        padding={0}
      />
      <div className={PartnersStyles.wrapper}>
        <div className={PartnersStyles.container}>
          <Img
            style={{ margin: 50 }}
            imgStyle={{}}
            fluid={data.logo1.childImageSharp.fluid}
            alt=""
          />
          <div className={PartnersStyles.text}>
            <div className={PartnersStyles.header}>
              <h1>CasinoWare</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className={PartnersStyles.contact}>
              <button className={PartnersStyles.button}>
                Visit CasinoWare
              </button>
            </div>
          </div>
        </div>
        <div className={PartnersStyles.container2}>
          <div className={PartnersStyles.text2}>
            <div className={PartnersStyles.header2}>
              <h1>Australian Poker Tour</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className={PartnersStyles.contact}>
              <button className={PartnersStyles.button}>Visit APTLive</button>
            </div>
          </div>
          <Img
            style={{ margin: 50 }}
            imgStyle={{}}
            fluid={data.logo2.childImageSharp.fluid}
            alt=""
          />
        </div>
        <div className={PartnersStyles.container3}>
          <Img
            style={{ margin: 50 }}
            imgStyle={{}}
            fluid={data.logo3.childImageSharp.fluid}
            alt=""
          />
          <div className={PartnersStyles.text3}>
            <div className={PartnersStyles.header3}>
              <h1>Check Raise</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className={PartnersStyles.contact}>
              <button className={PartnersStyles.button}>
                Visit Check Raise
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Partners
