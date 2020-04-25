import React from "react"
import { Link } from "gatsby"
import ServicesStyles from "../components/ServicesPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const ServicesPage = () => {
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
    <>
      <Header
        image="pokerbg.jpg"
        hideButton={true}
        padding={50}
        text={
          <>
            <span>SERVICES</span> <br />
            <span>&</span>
            <br />
            <span>MARKET INITIATIVES</span>
          </>
        }
      />
      <div className={ServicesStyles.wrapper}>
        <div id="live-poker" className={ServicesStyles.section}>
          <div className={ServicesStyles.header}>
            <h1>LIVE POKER ROOM SOFTWARE</h1>
          </div>
          {/* <div className={ServicesStyles.img} style={{ position: "relative" }}>
            <Img
              objectFit="cover"
              imgStyle={{
                // borderRadius: "10px 10px 0px 0px",
                objectFit: "contain",
              }}
              fluid={data.image2.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}

          <div class={ServicesStyles.flipCard}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image2.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>LIVE POKER ROOM SOFTWARE</h1>
                <p>
                  Team Poker® offers limited event licensing for single casino
                  internal LIVE Poker Rooms now through our existing tournament
                  software Partners.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>
          <div className={ServicesStyles.text}>
            <p>
              Team Poker® has partnered with the most professional Live Poker
              Room software providers available. Their Poker Room Management and
              Tournament Software is available now to any large or small Casino
              and Poker Room. The poker software is the best in the World and
              can handle all aspects of poker room management for Cash and
              Tournament Poker Play.{" "}
            </p>
            <p>
              Our Live Poker Room Software Partners meet and provide all
              requirements of Team Poker® including:{" "}
              <span className={ServicesStyles.lead}>
                (1) Team and Individual Scoring and Payouts; (2) Poker Team
                Handicapping;{" "}
              </span>{" "}
              and,{" "}
              <span className={ServicesStyles.lead}>
                (3) Non- Contact Seating Protocol.{" "}
              </span>
              It is easy to run Team Poker® Events of any size from small
              Satellites to Massively Large Tournaments with thousands of
              players. Our Partners offer Team Poker® limited licensing from
              FREE to Monthly & Yearly Subscriptions.
            </p>
          </div>
          <div className={ServicesStyles.contact}>
            <button className={ServicesStyles.button}>
              Contact us for Poker Room Software
            </button>
          </div>
        </div>

        <div
          id="online-poker"
          className={ServicesStyles.section}
          style={{ background: "#f7f7f7" }}
        >
          <div className={ServicesStyles.header}>
            <h1>ONLINE POKER ROOMS</h1>
          </div>
          <div class={ServicesStyles.flipCardRight}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image3.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>ONLINE POKER ROOMS</h1>
                <p>
                  We are looking for ONLINE Poker Rooms to implement the
                  TeamPoker® System in their Rooms. Contact us about
                  Requirements and licensing.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>

          {/* <div
            className={ServicesStyles.imgRight}
            style={{ position: "relative" }}
          >
            <Img
              objectFit="cover"
              imgStyle={{
                objectFit: "contain",
                // borderRadius: "10px 10px 0px 0px",
              }}
              fluid={data.image3.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}
          <div className={ServicesStyles.textLeft}>
            <p>
              We are looking to Partner with Online Poker Rooms that can fully
              implement the TeamPoker® Requirements and the Poker Sports Team
              Model in their software. Providers must meet capabilities of the
              strict TeamPoker® requirements including the No-Contact Seating
              Protocol, Scoring, and Team Handicapping.
            </p>
            <p>
              {" "}
              TeamPoker.com has implemented the Team Poker® Requirements in our
              Charity Prototype and it can be used as an example of how to
              implement the Sports Team Model including: establishing teams and
              ownership rights, changing teams, tournament entry, initial &
              consolidation seating protocol, and ranking individuals and teams.
              The format mirrors the professional sports league model. Contact
              us about licensing.
            </p>
          </div>
          <div className={ServicesStyles.contact}>
            <button className={ServicesStyles.button}>
              Contact us for Online Poker Rooms
            </button>
          </div>
        </div>

        <div id="championship" className={ServicesStyles.section}>
          <div className={ServicesStyles.header}>
            <h1>CHAMPIONSHIP LICENSES</h1>
          </div>

          <div class={ServicesStyles.flipCard}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image1.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>CHAMPIONSHIP LICENSES</h1>
                <p>
                  Also wanted are Partners for both LIVE and ONLINE Poker Rooms
                  in support of The WORLD POKER TEAM CHAMPIONSHIP™ - Annual
                  Series.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>
          {/* <div className={ServicesStyles.img} style={{ position: "relative" }}>
            <Img
              objectFit="cover"
              imgStyle={{
                // borderRadius: "10px 10px 0px 0px",
                // border: "4px solid white",
                objectFit: "contain",
              }}
              fluid={data.image1.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}
          <div className={ServicesStyles.text}>
            <p>
              We also are looking for partners for both LIVE and ONLINE poker
              rooms in support of The WORLD POKER TEAM CHAMPIONSHIP™ (WPTC) -
              SERIES. This Series will be conducted by location: Home Games,
              City, State, Region, Country, Continent, and World Championship
              Finals for both Live and Online Poker Rooms.
            </p>
            <p>
              {" "}
              The WPTC Series will be designed to implement the Poker Sports
              Model for Poker Teams of Various Sizes, Classes, and Divisions all
              leading to The WORLD POKER TEAM CHAMPIONSHIP™ - Finals for Live
              and Online Poker. All Production and Video Licenses for
              Championship Licenses are issued separately. Contact Team Poker
              LLC for requirements and Licensing Partnerships for Team Poker®
              Championships.
            </p>
          </div>
          <div className={ServicesStyles.contact}>
            <button className={ServicesStyles.button}>
              Contact us for Licenses
            </button>
          </div>
        </div>
        {/* <div className={ServicesStyles.contact}>
          <button className={ServicesStyles.button}>
            Contact us for Linceses
          </button>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
