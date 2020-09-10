import React from "react"
import Layout from "../layout/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "normalize.css"
import styles from "../styles/blog.module.scss"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      slug
      cover {
        fluid(maxWidth: 980, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout shouldShowHeaderButton={false} shouldShowHeaderContent={false}>
      <SEO
        title={props.data.contentfulBlog.title}
        link={`https://teampoker.com/blog/${props.data.contentfulBlog.slug.replace(
          /\s/g,
          "-"
        )}`}
        description="TeamPoker® Official Blog"
      />

      <div className={styles.blogContainer}>
        <h1>{props.data.contentfulBlog.title}</h1>
        {props.data.contentfulBlog.cover && (
          <Img
            fluid={props.data.contentfulBlog.cover.fluid}
            key={props.data.contentfulBlog.cover.fluid.src}
            alt={props.data.contentfulBlog.cover.fluid.src}
          />
        )}
        <p className={styles.blogPostDate}>{props.data.contentfulBlog.date}</p>
        <div className={styles.blogPostBody}>
          {documentToReactComponents(
            props.data.contentfulBlog.body.json,
            options
          )}
        </div>
      </div>
      <div className="share-post-head">
        <h3>SHARE</h3>
      </div>
      <Share
        socialConfig={{
          twitterHandle: "@teampoker",
          config: {
            url: `https://teampoker.com/blog/${props.data.contentfulBlog.slug.replace(
              /\s/g,
              "-"
            )}`,
            title: props.data.contentfulBlog.title,
          },
        }}
        tags={["teampoker", "poker", "casino", "pokerteam", "teampoker"]}
      />
    </Layout>
  )
}

export default Blog
