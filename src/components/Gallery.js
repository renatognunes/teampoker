import React from "react"
import GalleryStyles from "./GalleryPage.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"

const Gallery = () => {
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
  )
}

export default Gallery
