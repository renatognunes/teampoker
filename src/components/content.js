import React from "react"
import contentStyles from "./content.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image-header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
          <h1>We make poker a Team Sport.</h1>
          <p>
            Team Poker® patented system allows both Individuals and Teams to
            play and compete in poker tournaments for a percentage of the prize
            pool.{" "}
          </p>
          <button className={contentStyles.button}>How it works</button>
        </div>
      </div>
      <div>
        <div className={contentStyles.image}>
          <Image />
        </div>
      </div>
    </div>
    // <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by macrovector - www.freepik.com</a>
  )
}

export default content
