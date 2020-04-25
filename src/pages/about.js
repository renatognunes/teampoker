import React from "react"
import { Link } from "gatsby"
import AboutStyles from "../components/AboutPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

const About = props => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "services7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "services9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "services10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        buttonText=""
        image="aboutusbg.jpg"
        text={<span>ABOUT US</span>}
        hideButton={true}
        padding={0}
      />
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.title}>
          <h1>We're Team Poker®</h1>
        </div>
        <div className={AboutStyles.headlinetop}>
          <p>
            TeamPoker® is “The Patented Card Game Process” for the Tournament
            Poker Team Sports Model.
            {/* <br /> Help us make Poker a Team Sport! Start a Club and Own the
            Team! */}
          </p>
        </div>
        <div className={AboutStyles.content}>
          <div className={AboutStyles.container}>
            <div className={AboutStyles.image}>
              <Img
                style={{}}
                imgStyle={{}}
                fluid={data.logo1.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className={AboutStyles.details}>
              <h3>Individual & Team Scoring</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={AboutStyles.container}>
            <div className={AboutStyles.details}>
              <h3>TeamPoker® Seating Protocol</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={AboutStyles.image}>
              <Img
                style={{}}
                imgStyle={{}}
                fluid={data.logo2.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
          <div className={AboutStyles.container}>
            <div className={AboutStyles.image}>
              <Img
                style={{}}
                imgStyle={{}}
                fluid={data.logo3.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className={AboutStyles.details}>
              <h3>TeamPoker® Handicap</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
