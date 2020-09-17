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
            <h1>Try us for FREE!</h1>
            <p>
              TeamPoker® CasinoWare is FREE for up to 100 PLAYERS and 3 TABLES
              and Charities.
            </p>
            <p>
              <i>
                The Most Professional Poker Room Software on the Market Now with
                Team Poker®
              </i>
            </p>
            <span className={AboutStyles.headline}>
              Start a Team and Own the Club!
            </span>
            <a
              href="https://casinoware.com/quick-start/free-download"
              target="_blank"
            >
              <button className={AboutStyles.button}>Download for FREE</button>
            </a>
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
