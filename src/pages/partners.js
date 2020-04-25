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
        <div className={PartnersStyles.headline_bottom}>
          <h1>Become a Team Poker® Partner</h1>
        </div>
        <div className={PartnersStyles.headlinetop} id="casinoware">
          <p>
            Become a Team Poker® Partner and join the Poker Sports Model where
            both Individuals and Teams compete for cash, glory and fame!
            {/* <br /> Help us make Poker a Team Sport! Start a Club and Own the
            Team! */}
          </p>
        </div>
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
              CasinoWare is the ultimate poker tournament, cash game and casino
              management software package. You will not find a more
              professional, feature rich, easy to use tool for running your
              tournaments.
              {/* With the CasinoWare you can focus on playing in your tournaments instead of running them - CasinoWare runs them for you. */}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "} */}
            </p>
            <div className={PartnersStyles.contact}>
              <a
                href="https://casinoware.net/"
                target="_blank"
                className={PartnersStyles.button}
              >
                Visit CasinoWare
              </a>
            </div>
          </div>
        </div>
        <div className={PartnersStyles.headline} id="apt">
          <p>
            If you run a poker room or want to start one just download our
            existing partners Poker Room Software and you can be playing Team
            Poker® Tournaments immediately.
          </p>
        </div>
        <div className={PartnersStyles.container2}>
          <div className={PartnersStyles.text2}>
            <div className={PartnersStyles.header2}>
              <h1>Australian Poker Tour</h1>
            </div>
            <p>
              The Australian Poker Tour is a series of major poker tournaments
              conducted throughout Australia. Australian Poker Tour Events take
              place in some of the largest pubs and clubs in Australia’s largest
              cities.
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "} */}
            </p>
            <div className={PartnersStyles.contact}>
              <a
                href="https://australianpokertour.com.au/"
                target="_blank"
                className={PartnersStyles.button}
              >
                Visit APTLive
              </a>
            </div>
          </div>
          <Img
            style={{ margin: 50 }}
            imgStyle={{}}
            fluid={data.logo2.childImageSharp.fluid}
            alt=""
          />
        </div>
        <div className={PartnersStyles.headline} id="checkraise">
          <p>
            If you are a poker software developer for either Brick and Mortar/
            Live Poker or an Online Poker Room, contact us about Licensing
            Requirements to bring the Poker Team Paradigm to your Room.
          </p>
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
              Check Raise Poker is a series of major poker tournaments conducted
              throughout Australia. Team Poker® events has joined their schedule
              to bring the Poker Sports Model to their live events.
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "} */}
            </p>
            <div className={PartnersStyles.contact}>
              <a
                href="https://www.facebook.com/Check-Raise-Poker-QLD-1090772524462203/"
                target="_blank"
                className={PartnersStyles.button}
              >
                Visit Check Raise
              </a>
            </div>
          </div>
        </div>

        <div className={PartnersStyles.bottom}>
          <button className={PartnersStyles.button}>Become a Partner</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Partners
