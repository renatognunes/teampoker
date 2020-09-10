import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/SEO"
import Services from "../components/Services"
import "normalize.css"
import "../styles/global.scss"

const ServicesPage = () => {
  return (
    <Layout
      headerTitle={
        <>
          <span>SERVICES</span> <br />
          <span>&</span>
          <br />
          <span>MARKET INITIATIVES</span>
        </>
      }
      headerImages={["services-bg.jpg"]}
      shouldShowHeaderButton={false}
      shouldShowHeaderContent
    >
      <SEO
        title="Services"
        link="https://teampoker.com/services"
        description="TeamPoker® provides Live Poker Room Software, Online Poker Rooms, and Championship licenses."
      />
      <Services />
    </Layout>
  )
}

export default ServicesPage
