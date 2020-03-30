import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import AboutStyles from "./About.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCertificate,
  faExclamationTriangle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "blue-chip.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={AboutStyles.wrapper}>
      <div className={AboutStyles.content}>
        <div className={AboutStyles.aboutWrapper}>
          <div className={AboutStyles.about}>
            <h1>We're TeamPoker®</h1>
            <p>
              {/* Join the New Poker Paradigm!
              <br />
              Start a Team and Own the Club.
              <br />
              If your Room Doesn’t Play TeamPoker® Demand It! */}
              {/* Join the New Poker Paradigm! <br /> */}
              TeamPoker® is <i>“The Patented Card Game Process” </i>for the New
              Tournament Poker Team Sports Model.
            </p>
            <span className={AboutStyles.headline}>
              Start a Team and Own the Club!
            </span>
            {/* <Img
              // style={{ boxShadow: "10px 101px #403492" }}
              // objectFit="cover"
              imgStyle={{
                maxWidth: "500px",
                // flex: 1,
                // boxShadow: "10px 101px #403492",
                // objectFit: "contain",
              }}
              fixed={data.image.childImageSharp.fixed}
              alt="poker chip"
            /> */}
          </div>
        </div>
        <div className={AboutStyles.textWrapper}>
          <div>
            {/* <FontAwesomeIcon icon="spinner" size="xs" /> */}
            <FontAwesomeIcon size="5x" color={"#bbb96d"} icon={faCertificate} />
            <p>
              {/* <FontAwesomeIcon icon="check-square" /> */}
              {/* <FontAwesomeIcon icon={faCertificate} /> */}
              The patented system allows both Individuals and Teams to compete
              in poker tournaments.
            </p>
          </div>
          <br />
          <div>
            <FontAwesomeIcon
              size="5x"
              color={"#b25344"}
              icon={faExclamationTriangle}
            />
            <p>
              Our Poker Sports Model includes options for Collusion Free Seating
              Protocol.
            </p>
          </div>
          <br />
          <div>
            <FontAwesomeIcon size="5x" color={"#339966"} icon={faUsers} />
            <p>
              Any Size Team is possible in the same tournament with the
              TeamPoker® Handicapping System.
            </p>
          </div>
          <div>
            <button className={AboutStyles.button}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
