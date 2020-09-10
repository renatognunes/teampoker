import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/SEO"

import Services from "../components/homepage/Services"
import About from "../components/homepage/About"
import Clients from "../components/homepage/Clients"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => (
  <Layout
    headerTitle="WE MAKE POKER A TEAM SPORT"
    headerButtonText="How It Works"
    headerURL="/about"
    headerImages={["home-1.jpg", "home-2.jpg", "home-3.jpg"]}
    shouldShowHeaderButton
    shouldShowHeaderContent
  >
    <SEO
      title="TeamPoker®"
      link="https://teampoker.com"
      description="TeamPoker® is “The Patented Card Game Process” for the Tournament Poker Team Sports Model."
    />
    <Services />
    <About />
    <Clients />
  </Layout>
)

export default IndexPage
