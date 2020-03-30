import React from "react"
import { Link } from "gatsby"
import propertyStyles from "../components/Property.module.scss"
import Header from "../components/navbar"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const IntellectualProperty = () => (
  <>
    <Header />
    <div className={propertyStyles.header}>
      <h1>INTELLECTUAL PROPERTY</h1>

      <div className={propertyStyles.textWrapper}>
        <p>
          Team Poker® is a Register Mark, for Entertainment and Game Class; and,
          Patented System 7819735 Oct 2010 for Team Gaming, Card Game Class,
          owned by Team Poker LLC a Colorado Company. All rights to use the
          Registered Mark and Patented Team Gaming System for Poker or Any Other
          Game must be licensed through Team Poker LLC.{" "}
        </p>
        <p>
          {" "}
          All materials associated with TeamPoker.com and Team Poker®
          Copyrighted and Patented material are Owned by Team Poker LLC. Any use
          of Team Poker® or Patented Team Gaming Concept must be Licensed
          directly through Team Poker LLC or its Limited Licensed Associates.
        </p>
        <p>
          All content and materials available on the TeamPoker.com and Licensed
          Associate Sites and Software are protected by copyrights, trademarks,
          service marks, patents, trade secrets or other proprietary rights and
          laws. Designated trademarks, service marks and brands are the property
          of their respective owners. Reproduction, copying, or redistribution
          for commercial purposes of any materials or design elements on
          TeamPoker.com or Licensed Associated Site is strictly prohibited
          without the express written permission of the respective owner.
        </p>
        <p>
          {" "}
          Except as expressly authorized in writing, no one is authorized to
          sell, license, rent, modify, distribute, copy, reproduce, transmit,
          publicly display, publicly perform, publish, adapt, edit or create
          derivative works from such materials or content.
        </p>
        <p>
          {" "}
          Any use of Team Poker® Intellectual Property without Licensing is
          strictly prohibited.
          <br /> Please Contact one of our Limited Licensed Associate Partners
          listed in www.TeamPoker.com; or, Contact info@teampoker.com; or, Call
          1- (970) 290-3936 for Licensing Inquires.
        </p>
      </div>
    </div>
    <Footer />
  </>
)

export default IntellectualProperty
