import React from "react"
import Layout from "../layout/Layout"
import IntellectualProperty from "../components/IntellectualProperty"
import SEO from "../components/SEO"
import "normalize.css"
import "../styles/global.scss"

const IntellectualPropertyPage = () => (
  <Layout shouldShowHeaderButton={false} shouldShowHeaderContent={false}>
    <SEO
      title="Intellectual Property"
      link="https://teampoker.com/intellectual-property"
      description="Intellectual Property"
    />
    <IntellectualProperty />
  </Layout>
)

export default IntellectualPropertyPage
