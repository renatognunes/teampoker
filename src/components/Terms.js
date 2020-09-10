import React from "react"
import termsStyles from "./terms.module.scss"

const Terms = () => (
  <div>
    <div className={termsStyles.header}>
      <h1>Terms & Conditions</h1>

      <div className={termsStyles.textWrapper}>
        <p>
          All Terms of Service and Conditions for Team Poker® Live Poker Room
          use or On-line Poker Rooms are handled through direct licenses with
          Team Poker LLC. Please contact Team Poker LLC or one of its Licensed
          Associates if you want to use the Team Poker® Process or Any Associate
          Intellectual Property.{" "}
        </p>
        <p>
          Use of Team Poker® is restricted to only locals where it is legal to
          use. Any illegal betting or gambling with Team Poker® is strictly
          prohibited. Anyone that thinks that parties are using Team Poker®
          illegal should notify the applicable controlling authorities and
          contact us immediately.{" "}
        </p>
        <p>
          <span
            style={{ fontWeight: 600, display: "block", paddingBottom: "10px" }}
          >
            LICENSE RESTRICTIONS
          </span>
          <br />
          Unless authorized by the TEAM POKER LLC GAME SOFTWARE PRIME LICENSE or
          otherwise authorized directly by Team Poker LLC, Users and Licensees
          may not
          <ol>
            <li>
              permit other individual(s) to use the Software or other
              Intellectual Property;
            </li>
            <li>
              modify, translate, reverse engineer, decompile, disassemble or
              create derivative works based upon the Licensed Software and
              Intellectual Property;
            </li>
            <li>copy the Software or Intellectual Property;</li>
            <li>
              rent, lease, transfer, sublicense or otherwise transfer rights to
              the Software and Intellectual Property;
            </li>
            <li>
              remove any proprietary notices or labels on the Software,
              including the code underlying the Software; or,
            </li>
            <li>
              use the Software and Intellectual Property for any reason other
              than the Limited License Commercial use as expressly identified by
              License.
            </li>
          </ol>
        </p>
        <p>
          <span style={{ fontWeight: 600 }}>THIRD PARTY WEBSITES</span> - Other
          Sites Are Not Our Responsibility This Site may link you to other
          websites that may contain information or material that some people may
          find objectionable. These other websites are not under our direct
          control and it is acknowledged that we are not responsible for the
          accuracy, copyright and trademark compliance, legality, decency or any
          other aspect of the content of such websites. Further, we shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with use of or
          reliance on any such third party content, goods or services available
          on or through any such website.
        </p>
        <p>
          <span
            style={{ fontWeight: 600, display: "block", paddingBottom: "10px" }}
          >
            GOVERNING LAW/JURISDICTION
          </span>
          <br />
          ALL ISSUES AND QUESTIONS CONCERNING THE CONSTRUCTION, VALIDITY,
          INTERPRETATION AND ENFORCEABILITY OF ANY LICENSE, THIS AGREEMENT OR
          THE RIGHTS AND OBLIGATIONS OF MEMBERS OR IN CONNECTION WITH ANY
          ASSOCIATED LICENSE, SITE, AND THE INTELLECTUAL PORPERTY, COPYWRIGHT,
          SOFTWARE AND THE PROCESS SHALL BE GOVERNED BY AND CONSTRUED IN
          ACCORDANCE WITH THE INTERNAL LAWS OF THE UNITED STATES OF AMERICA,
          STATE OF NEVADA WITHOUT GIVING EFFECT TO ANY CHOICE OF LAW OF CONFLICT
          OF LAW RULES OR PROVISIONS THAT WOULD CAUSE THE APPLICATION OF ANY
          OTHER JURISDICTIONS LAWS. The state and federal courts located in Las
          Vegas Nevada shall have exclusive jurisdiction over any suit or other
          proceeding arising out of or based upon any use of any licensing
          agreement, this Site our Associate Sites and Licenses and any direct
          or associated licenses, and by using the Site and Team Poker®
          Licenses, each user hereby waives any claim that he or she or their
          company is not subject personally to the jurisdiction of said courts
          or that any such suit or other proceeding is brought in an
          inconvenient forum or improper venue.
        </p>
      </div>
    </div>
  </div>
)

export default Terms
