import React from "react"
import layoutStyles from "./layout.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

function HeaderOverlay() {
  return (
    <div>
      <div className={layoutStyles.backgroundWrapperBack} />
      <div className={layoutStyles.backgroundWrapper} />
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "images" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={2} // transition duration between images
        duration={4} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={["home-1.jpg", "home-2.jpg", "home-3.jpg"]}
        // pass down standard element props
        style={{
          maxHeight: "550px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          zIndex: -1,
        }}
      />
    </div>
  )
}

export default HeaderOverlay
