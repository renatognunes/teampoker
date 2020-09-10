import React from "react"
import Layout from "../layout/Layout"
import PrivacyPolicy from "../components/PrivacyPolicy"
import SEO from "../components/SEO"
import "normalize.css"
import "../styles/global.scss"

const PrivacyPolicyPage = () => (
  <Layout shouldShowHeaderButton={false} shouldShowHeaderContent={false}>
    <SEO
      title="Privacy Policy"
      link="https://teampoker.com/privacy-policy"
      description="Privacy Policy"
    />
    <PrivacyPolicy />
  </Layout>
)

export default PrivacyPolicyPage
