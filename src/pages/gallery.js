import React from "react"
import { Link } from "gatsby"
import GalleryStyles from "../components/GalleryPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import classNames from "classnames"
import "../styles/global.scss"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const Gallery = props => {
  const [isModalOpen, changeModal] = React.useState(false)
  const [src, currentSrc] = React.useState("")

  let className = classNames(GalleryStyles.overlay, {
    [GalleryStyles.open]: isModalOpen,
  })

  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            date(formatString: "MMMM Do, YYYY")
            gallery {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const handleImage = e => {
    currentSrc(e.target.src)
    changeModal(true)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
        <link rel="canonical" href="https://teampoker.com/gallery" />
      </Helmet>
      <SEO title="Gallery" description="TeamPoker® event's Gallery" />
      <Header
        image="gallery-bg.jpg"
        text={<span>GALLERY</span>}
        hideButton={true}
        padding={0}
      />
      <div>
        <div className={GalleryStyles.container}>
          <div className={className}>
            <div className={GalleryStyles.overlay_inner}>
              <button
                className={GalleryStyles.close}
                onClick={() => changeModal(false)}
              >
                X
              </button>
              <img src={src} />
            </div>
          </div>
          {data.allContentfulGallery.edges.map((edge, idx) => {
            return (
              <div className={GalleryStyles.eventContainer} key={idx}>
                <div className={GalleryStyles.header}>
                  <h2>{edge.node.title}</h2>
                  <span>{edge.node.date}</span>
                </div>
                <div className={GalleryStyles.imagesGrid}>
                  {edge.node.gallery.map((i, idx) => (
                    <img
                      onClick={handleImage}
                      className={GalleryStyles.image}
                      key={idx}
                      src={i.file.url}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery
