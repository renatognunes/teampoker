import React from "react"
import Layout from "../layout/Layout"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import "normalize.css"
import "../styles/global.scss"

const ContactPage = () => {
  return (
    <Layout
      headerTitle="CONTACT US"
      headerImages={["contact-bg.jpg"]}
      shouldShowHeaderButton={false}
      shouldShowHeaderContent
    >
      <SEO
        title="Contact"
        link="https://teampoker.com/contact"
        description="Contact us for licenses, partnerships and live poker room software systems."
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
