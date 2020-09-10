import React from "react"
import Layout from "../layout/Layout"
import Blog from "../components/Blog"
import SEO from "../components/seo"
import "normalize.css"
import "../styles/global.scss"

const BlogPage = () => {
  return (
    <Layout
      headerTitle="LATEST POKER NEWS"
      headerImages={["blog-bg.jpg"]}
      shouldShowHeaderButton={false}
      shouldShowHeaderContent
    >
      <SEO
        title="Blog"
        link="https://teampoker.com/blog"
        description="TeamPoker® Official Blog"
      />
      <Blog />
    </Layout>
  )
}

export default BlogPage
