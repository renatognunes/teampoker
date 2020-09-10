import React from "react"
import { Link } from "gatsby"
import BlogStyles from "../styles/BlogPage.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
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
  )
}

export default Blog
