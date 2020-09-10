import React from "react"
import { Link } from "gatsby"
import AboutStyles from "../../styles/About.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCertificate,
  faExclamationTriangle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <div className={AboutStyles.wrapper}>
      <div className={AboutStyles.content}>
        <div className={AboutStyles.aboutWrapper}>
          <div className={AboutStyles.about}>
            <h1>We're TeamPoker®</h1>
            <p>
              TeamPoker® is <i>“The Patented Card Game Process” </i>for the
              Tournament Poker Team Sports Model.
            </p>
            <span className={AboutStyles.headline}>
              Start a Team and Own the Club!
            </span>
          </div>
        </div>
        <div className={AboutStyles.textWrapper}>
          <div>
            <FontAwesomeIcon size="5x" color={"#bbb96d"} icon={faCertificate} />
            <p>
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
            <Link to="/about">
              <button className={AboutStyles.button}>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
