import React from "react"
import Layout from "../layout/Layout"
import About from "../components/About"
import "normalize.css"
import "../styles/global.scss"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout
      headerTitle="ABOUT US"
      headerImages={["about-bg.jpg"]}
      shouldShowHeaderButton={false}
      shouldShowHeaderContent
    >
      <SEO
        title="About"
        link="https://teampoker.com/about"
        description="TeamPoker® is “The Patented Card Game Process” for the Tournament Poker Team Sports Model."
      />
      <About />
    </Layout>
  )
}

export default AboutPage
