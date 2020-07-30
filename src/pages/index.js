import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>TeamPoker®</title>
      <link rel="canonical" href="https://teampoker.com" />
    </Helmet>
    <SEO
      title="TeamPoker®"
      description="TeamPoker® is “The Patented Card Game Process” for the Tournament Poker Team Sports Model."
    />
    <Layout />
  </>
)

export default IndexPage
