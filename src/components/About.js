import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import AboutStyles from "./About.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faCertificate,
  faExclamationTriangle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

{
  /* <FontAwesomeIcon icon={faCoffee} /> */
}

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
            <h1>We're Team Poker®</h1>
            <p>
              Team Poker® is a patented scoring system that allows both
              individuals and teams to compete in poker tournaments.{" "}
            </p>
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
            <FontAwesomeIcon size="5x" icon={faCertificate} />
            <p>
              {/* <FontAwesomeIcon icon="check-square" /> */}
              {/* <FontAwesomeIcon icon={faCertificate} /> */}
              The patented system allows both Individuals and Teams to compete
              in poker tournaments.
            </p>
          </div>
          <br />
          <div>
            <FontAwesomeIcon size="5x" icon={faExclamationTriangle} />
            <p>
              Our Poker Sports Model includes options for Collusion Free Seating
              Protocol.
            </p>
          </div>
          <br />
          <div>
            <FontAwesomeIcon size="5x" icon={faUsers} />
            <p>
              Any Size Team is possible in the same tournament with the Team
              Poker® Handicapping System.
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
