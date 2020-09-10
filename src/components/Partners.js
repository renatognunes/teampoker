import React from "react"
import { Link } from "gatsby"
import PartnersStyles from "../styles/PartnersPage.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "logo-casinoware.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "logo-apt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "logo-check.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={PartnersStyles.wrapper}>
      <div className={PartnersStyles.headline_bottom}>
        <h1>Become a Team Poker® Partner</h1>
      </div>
      <div className={PartnersStyles.headlinetop} id="casinoware">
        <p>
          Become a Team Poker® Partner and join the Poker Sports Model where
          both Individuals and Teams compete for cash, glory and fame!
        </p>
      </div>
      <div className={PartnersStyles.container}>
        <div className={PartnersStyles.images}>
          <Img fluid={data.logo1.childImageSharp.fluid} alt="" />
        </div>
        <div className={PartnersStyles.text}>
          <div className={PartnersStyles.header}>
            <h1>CasinoWare</h1>
          </div>
          <p>
            CasinoWare is the ultimate poker tournament, cash game and casino
            management software package. You will not find a more professional,
            feature rich, easy to use tool for running your tournaments.
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
        <div className={PartnersStyles.images}>
          <Img fluid={data.logo2.childImageSharp.fluid} alt="" />
        </div>
      </div>
      <div className={PartnersStyles.headline} id="checkraise">
        <p>
          If you are a poker software developer for either Brick and Mortar/
          Live Poker or an Online Poker Room, contact us about Licensing
          Requirements to bring the Poker Team Paradigm to your Room.
        </p>
      </div>
      <div className={PartnersStyles.container3}>
        <div className={PartnersStyles.images}>
          <Img fluid={data.logo3.childImageSharp.fluid} alt="" />
        </div>
        <div className={PartnersStyles.text3}>
          <div className={PartnersStyles.header3}>
            <h1>Check Raise</h1>
          </div>
          <p>
            Check Raise Poker is a series of major poker tournaments conducted
            throughout Australia. Team Poker® events has joined their schedule
            to bring the Poker Sports Model to their live events.
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
        <Link to="/contact">
          <button className={PartnersStyles.button}>Become a Partner</button>
        </Link>
      </div>
    </div>
  )
}

export default Partners
