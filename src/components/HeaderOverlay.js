import React, { useMemo } from "react"
import styles from "../styles/headerOverlay.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

function HeaderOverlay({ headerImages }) {
  const isSlide = useMemo(() => {
    return headerImages.length > 1 ? true : false
  }, [headerImages])

  return (
    <div>
      <div className={styles.backgroundWrapperBack} />
      <div className={styles.backgroundWrapper} />
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
        initDelay={isSlide ? 2 : 0} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={isSlide ? 2 : 0} // transition duration between images
        duration={isSlide ? 4 : 0} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={headerImages}
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
