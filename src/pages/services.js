import React from "react"
import { Link } from "gatsby"
import ServicesStyles from "../components/ServicesPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "services9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "services7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "services10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header text="MARKET INITIATIVES" />
      <div className={ServicesStyles.wrapper}>
        <div id="live-poker" className={ServicesStyles.section}>
          <div className={ServicesStyles.header}>
            <h1>LIVE POKER ROOM SOFTWARE</h1>
          </div>
          {/* <div className={ServicesStyles.img} style={{ position: "relative" }}>
            <Img
              objectFit="cover"
              imgStyle={{
                // borderRadius: "10px 10px 0px 0px",
                objectFit: "contain",
              }}
              fluid={data.image2.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}

          <div class={ServicesStyles.flipCard}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image2.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>LIVE POKER ROOM SOFTWARE</h1>
                <p>
                  Team Poker® offers limited event licensing for single casino
                  internal LIVE Poker Rooms now through our existing tournament
                  software Partners.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>
          <p>
            Team Poker® offers limited event licensing for single casino
            internal LIVE Poker Rooms now through our existing tournament
            software Partners. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed dolor ex, semper id odio sed, sagittis
            tincidunt quam. Vestibulum vitae elit nisi. Nullam eu dolor eget
            ante sodales egestas. Nulla pellentesque malesuada lacus eu tempor.
            Fusce pellentesque at risus eget porttitor. Cras commodo tellus
            sapien, sit amet mattis sapien aliquam ut. Curabitur nec massa eget
            diam euismod mattis non in ante. Donec elementum non augue in
            placerat. Praesent tempus interdum orci, in iaculis erat placerat
            vel. Vivamus vel placerat arcu. Integer eleifend aliquet volutpat.
            Nullam vel metus efficitur, faucibus dui non, blandit justo.
            Praesent convallis lectus ac purus dignissim placerat. Proin vel
            finibus urna. Duis in condimentum lorem, a porta ligula. Praesent
            tempus interdum orci, in iaculis erat placerat vel. Vivamus vel
            placerat arcu. Integer eleifend aliquet volutpat. Nullam vel metus
            efficitur, faucibus dui non, blandit justo. Praesent convallis
            lectus ac purus dignissim placerat. Proin vel finibus urna. Duis in
            condimentum lorem, a porta ligula. Integer eleifend aliquet
            volutpat. Nullam vel metus efficitur, faucibus dui non, blandit
            justo. Praesent convallis lectus ac purus dignissim placerat. Proin
            vel finibus urna. Duis in condimentum lorem, a porta ligula.
          </p>
        </div>

        <div
          id="online-poker"
          className={ServicesStyles.section}
          style={{ background: "rgb(241, 241, 241)" }}
        >
          <div className={ServicesStyles.header}>
            <h1>ONLINE POKER ROOMS</h1>
          </div>
          <div class={ServicesStyles.flipCardRight}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image3.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>ONLINE POKER ROOMS</h1>
                <p>
                  We are looking for ONLINE Poker Rooms to implement the
                  TeamPoker® System in their Rooms. Contact us about
                  Requirements and licensing.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>

          {/* <div
            className={ServicesStyles.imgRight}
            style={{ position: "relative" }}
          >
            <Img
              objectFit="cover"
              imgStyle={{
                objectFit: "contain",
                // borderRadius: "10px 10px 0px 0px",
              }}
              fluid={data.image3.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}
          <p>
            We are looking for ONLINE Poker Rooms to implement the TeamPoker®
            System in their Rooms. Contact us about Requirements and licensing.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor
            ex, semper id odio sed, sagittis tincidunt quam. Vestibulum vitae
            elit nisi. Nullam eu dolor eget ante sodales egestas. Nulla
            pellentesque malesuada lacus eu tempor. Fusce pellentesque at risus
            eget porttitor. Cras commodo tellus sapien, sit amet mattis sapien
            aliquam ut. Curabitur nec massa eget diam euismod mattis non in
            ante. Donec elementum non augue in placerat. Praesent tempus
            interdum orci, in iaculis erat placerat vel. Vivamus vel placerat
            arcu. Integer eleifend aliquet volutpat. Nullam vel metus efficitur,
            faucibus dui non, blandit justo. Praesent convallis lectus ac purus
            dignissim placerat. Proin vel finibus urna. Duis in condimentum
            lorem, a porta ligula. Praesent tempus interdum orci, in iaculis
            erat placerat vel. Vivamus vel placerat arcu. Integer eleifend
            aliquet volutpat. Nullam vel metus efficitur, faucibus dui non,
            blandit justo. Praesent convallis lectus ac purus dignissim
            placerat. Proin vel finibus urna. Duis in condimentum lorem, a porta
            ligula. Integer eleifend aliquet volutpat. Nullam vel metus
            efficitur, faucibus dui non, blandit justo. Praesent convallis
            lectus ac purus dignissim placerat. Proin vel finibus urna. Duis in
            condimentum lorem, a porta ligula.
          </p>
        </div>

        <div id="championship" className={ServicesStyles.section}>
          <div className={ServicesStyles.header}>
            <h1>CHAMPIONSHIP LICENSES</h1>
          </div>

          <div class={ServicesStyles.flipCard}>
            <div class={ServicesStyles.flipCardInner}>
              <div class={ServicesStyles.flipCardFront}>
                <Img
                  objectFit="cover"
                  imgStyle={{
                    // borderRadius: "10px 10px 0px 0px",
                    objectFit: "contain",
                  }}
                  fluid={data.image1.childImageSharp.fluid}
                  alt=""
                />
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
              </div>
              <div class={ServicesStyles.flipCardBack}>
                <h1>CHAMPIONSHIP LICENSES</h1>
                <p>
                  Also wanted are Partners for both LIVE and ONLINE Poker Rooms
                  in support of The WORLD POKER TEAM CHAMPIONSHIP™ - Annual
                  Series.
                </p>
                {/* <p>We love that guy</p> */}
              </div>
            </div>
          </div>
          {/* <div className={ServicesStyles.img} style={{ position: "relative" }}>
            <Img
              objectFit="cover"
              imgStyle={{
                // borderRadius: "10px 10px 0px 0px",
                // border: "4px solid white",
                objectFit: "contain",
              }}
              fluid={data.image1.childImageSharp.fluid}
              alt=""
            /> */}
          {/* <div className={ServicesStyles.overlay}></div> */}
          {/* </div> */}
          <p>
            Also wanted are Partners for both LIVE and ONLINE Poker Rooms in
            support of The WORLD POKER TEAM CHAMPIONSHIP™ - Annual Series. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor ex,
            semper id odio sed, sagittis tincidunt quam. Vestibulum vitae elit
            nisi. Nullam eu dolor eget ante sodales egestas. Nulla pellentesque
            malesuada lacus eu tempor. Fusce pellentesque at risus eget
            porttitor. Cras commodo tellus sapien, sit amet mattis sapien
            aliquam ut. Curabitur nec massa eget diam euismod mattis non in
            ante. Donec elementum non augue in placerat. Praesent tempus
            interdum orci, in iaculis erat placerat vel. Vivamus vel placerat
            arcu. Integer eleifend aliquet volutpat. Nullam vel metus efficitur,
            faucibus dui non, blandit justo. Praesent convallis lectus ac purus
            dignissim placerat. Proin vel finibus urna. Duis in condimentum
            lorem, a porta ligula. Praesent tempus interdum orci, in iaculis
            erat placerat vel. Vivamus vel placerat arcu. Integer eleifend
            aliquet volutpat. Nullam vel metus efficitur, faucibus dui non,
            blandit justo. Praesent convallis lectus ac purus dignissim
            placerat. Proin vel finibus urna. Duis in condimentum lorem, a porta
            ligula. Integer eleifend aliquet volutpat. Nullam vel metus
            efficitur, faucibus dui non, blandit justo. Praesent convallis
            lectus ac purus dignissim placerat. Proin vel finibus urna. Duis in
            condimentum lorem, a porta ligula.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
