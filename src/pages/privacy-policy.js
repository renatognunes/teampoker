import React from "react"
import { Link } from "gatsby"
import privacyStyles from "../components/Privacy.module.scss"
import Header from "../components/navbar"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import SEO from "../components/SEO"

library.add(fab, faCheckSquare, faCoffee)

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy"
      link="https://teampoker.com/privacy-policy"
      description="Privacy Policy"
    />
    <Header />
    <div className={privacyStyles.header}>
      <h1>PRIVACY POLICY</h1>

      <div className={privacyStyles.textWrapper}>
        <p>
          Team Poker LLC (“us”, “we”, or “our”) operates www.teampoker.com (the
          “Site”). This page informs you of our policies regarding the
          collection, use, and disclosure of Personal Information we receive
          from users of the Site.{" "}
        </p>
        <p>
          We use your Personal Information only for providing and improving the
          Site. By using the Site, you agree to the collection and use of
          information in accordance with this policy. Information Collection and
          Use:{" "}
        </p>
        <p>
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally, identifiable information may include, but is
          not limited to your name and contact information (“Personal
          Information”). This Personal Information is for Team Poker LLC use
          only and will not be intentionally released to any third party without
          permission.
        </p>
        <p>
          Cookies: Cookies are files with small amount of data, which may
          include an anonymous unique identifier. Cookies are sent to your
          browser from a web site and stored on your computer’s hard drive. Like
          many sites, we use “cookies” to collect information. You can instruct
          your browser to refuse all cookies or to indicate when a cookie is
          being sent. However, if you do not accept cookies, you may not be able
          to use some portions of our Site.{" "}
        </p>
        <p>
          Security: The security of your Personal Information is important to
          us, but remember that no method of transmission over the Internet, or
          method of electronic storage, is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.{" "}
        </p>
        <p>
          Changes to This Privacy Policy: Team Poker LLC may update this Privacy
          Policy from time to time. We will notify you of any changes by posting
          the new Privacy Policy on the Site. You are advised to review this
          policy and the other Terms and Conditions along with the Site License
          from time to time. You are advised to review this Privacy Policy
          periodically for any changes. You are considered informed of any Site
          Privacy Policies upon the posting of the policy.
        </p>
        <p>
          Contact Us: If you have any questions about the Privacy Policy, please
          contact us.
        </p>
      </div>
    </div>
    <Footer />
  </>
)

export default PrivacyPolicy
