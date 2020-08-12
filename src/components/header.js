import { Link } from "gatsby"
import React from "react"
import layoutStyles from "./layout.module.scss"
import BackgroundSlider from "gatsby-image-background-slider"
import { graphql, useStaticQuery } from "gatsby"
import Image from "./image"
import classNames from "classnames"
import Content from "./content"

const Header = props => {
  const [isNavbarOpen, changeNavbar] = React.useState(false)

  const inputEl = React.useRef(null)

  let className = classNames(layoutStyles.navBar, {
    [layoutStyles.navBarActive]: isNavbarOpen,
  })

  return (
    <div className={layoutStyles.headerWrapper}>
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
        images={["foto3.jpg", "foto4.jpg", "foto.jpg"]}
        // pass down standard element props
        style={{
          maxHeight: "550px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          // opacity: 0.5,
          // backgroundColor: "black",
          // backgroundSize: "cover",
          // background: "blue",
          backgroundPosition: "top",
          // top: 0,
          zIndex: -1,
          // transform: "rotate(-2deg) scale(.9)",
        }}
      ></BackgroundSlider>
      <nav className={layoutStyles.header}>
        <Link to="/">
          <div className={layoutStyles.logo}>
            <Image />
          </div>
        </Link>
        <ul ref={inputEl} className={className}>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div
          role="button"
          onClick={() => changeNavbar(!isNavbarOpen)}
          onKeyDown={() => changeNavbar(!isNavbarOpen)}
          tabIndex={0}
          className={layoutStyles.burgerContainer}
        >
          <input type="checkbox" className={layoutStyles.toggler} />
          <div className={layoutStyles.burger}>
            <div></div>
          </div>
        </div>
      </nav>
      <Content
        text={props.text}
        hideButton={false}
        buttonText={props.buttonText}
        url={props.url}
      />
      {/* </BackgroundSlider> */}
    </div>
  )
}

export default Header
