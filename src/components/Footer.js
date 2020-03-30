import React from "react"
import { Link } from "gatsby"
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
          <div className={FooterStyles.tags}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/intellectual-property">Intellectual Property</Link>
            <a>Charity Tool (prototype)</a>
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
              <Link to="https://www.facebook.com/PlayTeamPoker">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faFacebookSquare}
                />
              </Link>
              <Link to="https://www.linkedin.com/company/18173656">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faLinkedin}
                />
              </Link>
              <Link to="https://twitter.com/teampoker">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faTwitterSquare}
                />
              </Link>
              <Link to="https://www.instagram.com/teampoker/">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faInstagramSquare}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={FooterStyles.footer}>
        <span>TeamPoker®</span>
        <span>Patent 7819735 Oct 2010</span>
        <span>© 1999-2020 All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer
