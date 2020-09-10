import React from "react"
import Layout from "../layout/Layout"
import FAQ from "../components/FAQ"
import SEO from "../components/SEO"
import "normalize.css"
import "../styles/global.scss"

const FAQPage = () => (
  <Layout shouldShowHeaderButton={false} shouldShowHeaderContent={false}>
    <SEO
      title="FAQ"
      link="https://teampoker.com/faq"
      description="Frequently Asked Questions"
    />
    <FAQ />
  </Layout>
)

export default FAQPage
