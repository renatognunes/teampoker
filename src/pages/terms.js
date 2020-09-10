import React from "react"
import Layout from "../layout/Layout"
import Terms from "../components/Terms"
import SEO from "../components/seo"
import "normalize.css"
import "../styles/global.scss"

const TermsPage = () => (
  <Layout shouldShowHeaderButton={false} shouldShowHeaderContent={false}>
    <SEO
      title="Terms & Conditions"
      link="https://teampoker.com/terms"
      description="Terms and Conditions"
    />
    <Terms />
  </Layout>
)

export default TermsPage
