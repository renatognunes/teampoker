import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import FooterStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagramSquare,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className={FooterStyles.wrapper}>
      <div className={FooterStyles.content}>
        <div className={FooterStyles.links}>
          <h2>Links</h2>
          <div>
            <a>Privacy Policy</a>
            <a>FAQ</a>
            <a>Terms</a>
            <a>Intellectual Property</a>
          </div>
        </div>
        <div className={FooterStyles.contact}>
          <h2>Contact us</h2>
          <div className={FooterStyles.emails}>
            <span>info@teampoker.com</span>
            <span>Phone: (970) 290-3936</span>
          </div>
        </div>
        <div className={FooterStyles.copyright}>
          <h2>Follow us</h2>
          <div>
            <div className={FooterStyles.icons}>
              <FontAwesomeIcon
                size="2x"
                color={"#ffffff"}
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon size="2x" color={"#ffffff"} icon={faLinkedin} />
              <FontAwesomeIcon
                size="2x"
                color={"#ffffff"}
                icon={faTwitterSquare}
              />
              <FontAwesomeIcon
                size="2x"
                color={"#ffffff"}
                icon={faInstagramSquare}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={FooterStyles.footer}>
        <span>© 1999-2020 All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer
