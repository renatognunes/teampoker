import React from "react"
import { Link } from "gatsby"
import FooterStyles from "../styles/footer.module.scss"
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
            <a href="https://www.playteampoker.com/" target="_blank">
              Play TeamPoker® Online (beta)
            </a>
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
              <a href="https://www.facebook.com/PlayTeamPoker" target="_blank">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faFacebookSquare}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/18173656"
                target="_blank"
              >
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faLinkedin}
                />
              </a>
              <a href="https://twitter.com/teampoker" target="_blank">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faTwitterSquare}
                />
              </a>
              <a href="https://www.instagram.com/teampoker/" target="_blank">
                <FontAwesomeIcon
                  size="2x"
                  color={"#ffffff"}
                  icon={faInstagramSquare}
                />
              </a>
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
