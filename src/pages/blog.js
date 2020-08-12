import React from "react"
import { Link } from "gatsby"
import BlogStyles from "../components/BlogPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import classNames from "classnames"
import "../styles/global.scss"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="https://teampoker.com/blog" />
      </Helmet>
      <SEO title="Blog" description="TeamPoker® Official Blog" />
      <Header
        image="blog-post-bg.jpg"
        text={<span>LATEST POKER NEWS</span>}
        hideButton={true}
        padding={0}
      />
      <div>
        <div className={BlogStyles.container}>
          {data.allContentfulBlog.edges.map((edge, idx) => {
            return (
              <Link to={`/blog/${edge.node.slug.replace(/\s/g, "-")}`}>
                <div className={BlogStyles.blogWrapper} key={idx}>
                  <div className={BlogStyles.header}>
                    <h2>{edge.node.title}</h2>
                    <span>{edge.node.date}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
