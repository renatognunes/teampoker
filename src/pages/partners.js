import React from "react"
import Layout from "../layout/Layout"
import Partners from "../components/Partners"
import SEO from "../components/seo"
import "normalize.css"
import "../styles/global.scss"

const PartnersPage = () => {
  return (
    <Layout
      headerTitle="PARTNERS & CLIENTS"
      headerButtonText="Become a Partner"
      headerURL="/contact"
      headerImages={["partners-bg.jpg"]}
      shouldShowHeaderButton
      shouldShowHeaderContent
    >
      <SEO
        title="Partners & Clients"
        link="https://teampoker.com/partners"
        description="Become a Team Poker® Partner and join the Poker Sports Model where both Individuals and Teams compete for cash, glory and fame!"
      />
      <Partners />
    </Layout>
  )
}

export default PartnersPage
