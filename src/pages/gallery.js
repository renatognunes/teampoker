import React from "react"
import Layout from "../layout/Layout"
import Gallery from "../components/Gallery"
import "normalize.css"
import "../styles/global.scss"
import SEO from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout
      headerTitle="GALLERY"
      headerImages={["gallery-bg.jpg"]}
      shouldShowHeaderButton={false}
      shouldShowHeaderContent
    >
      <SEO
        title="Gallery"
        link="https://teampoker.com/gallery"
        description="TeamPoker® event's Gallery"
      />
      <Gallery />
    </Layout>
  )
}

export default GalleryPage
