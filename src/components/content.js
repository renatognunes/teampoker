import React from "react"
import contentStyles from "./content.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} />
}

const content = () => {
  return (
    <div className={contentStyles.container}>
      <div>
        <div className={contentStyles.headline}>
          <h1>
            WE MAKE POKER A{" "}
            <span className={contentStyles.team}>TEAM SPORT</span>
          </h1>
          <p>
            • The patented system allows both Individuals and Teams to compete
            in poker tournaments.
            <br />
            • Our Poker Sports Model includes options for Collusion Free Seating
            Protocol.
            <br /> • Any Size Team is possible in the same tournament with the
            Team Poker® Handicapping System.
          </p>
          <button className={contentStyles.button}>How it works</button>
        </div>
      </div>
      {/* <div>
        <div className={contentStyles.image}><Image /></div>
      </div> */}
    </div>
    // <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by macrovector - www.freepik.com</a>
  )
}

export default content
