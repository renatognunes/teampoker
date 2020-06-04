import React from "react"
import { Link } from "gatsby"
import AboutStyles from "../components/AboutPage.module.scss"
import Header from "../components/sub-pages-header"
import Img from "gatsby-image"
import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/Footer"
import "normalize.css"
import "../styles/global.scss"

const About = props => {
  let className = classNames(AboutStyles.overlay, AboutStyles.color1)

  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "seating.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "score-system-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "handicap-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 740, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        buttonText=""
        image="about-background.jpg"
        text={<span>ABOUT US</span>}
        hideButton={true}
        padding={0}
      />
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.title}>
          <h1>We're TeamPoker®</h1>
        </div>
        <div className={AboutStyles.headlinetop}>
          <p>
            TeamPoker® is “The Patented Card Game Process” for the Tournament
            Poker Team Sports Model.
          </p>
        </div>
        <div className={AboutStyles.content}>
          <div className={AboutStyles.container}>
            <div className={AboutStyles.image}>
              <div
                className={classNames(AboutStyles.overlay, AboutStyles.color1)}
              ></div>

              <Img
                imgStyle={{}}
                fluid={data.logo2.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div
              className={classNames(
                AboutStyles.details,
                AboutStyles.rightDetails
              )}
            >
              <h1>Individual & Team Scoring</h1>
              <p>
                Tournament Directors can structure any poker game with
                TeamPoker® so that both Individuals and Teams win a percentage
                of the prize pool. Any split is possible from 0-100%, either
                way.{" "}
                <span className={AboutStyles.bold}>
                  The inverse of the individual finish positions determines the
                  Global Points awarded for Team Point Scores that determine
                  team finish positions and payouts.
                </span>
                The team points ‘tie breaker’ is the highest Individual Finish
                Position.
              </p>
              <p>
                {" "}
                Global Points allow Team Handicapping and are the root of
                Standard Team Ranking for the WORLD POKER TEAM CHAMPIONSHIP™ -
                SERIES Ranking.
              </p>
              <p>
                {" "}
                A second option for Team Scoring is{" "}
                <span className={AboutStyles.bold}>Carry-The-Flog</span>, where
                only the{" "}
                <span className={AboutStyles.bold}>
                  top individual finish positions determine team payout.
                </span>{" "}
                The top individual team player Carries-The-Flag for team payout,
                and there is only one team payout per team.{" "}
              </p>
              <p>
                <span className={AboutStyles.bold}>
                  Both Individuals and Teams are Ranked by the TP Global Point
                  System™
                </span>{" "}
                that determines finish positions, award, and can be used for the
                basis of the optional Team Handicapping System.
              </p>
            </div>
          </div>
          <div
            className={classNames(
              AboutStyles.container,
              AboutStyles.middleContainer
            )}
          >
            <div className={AboutStyles.details}>
              <h1>TeamPoker® Seating Protocol</h1>
              <p>
                Tournament Directors structure and publish their Team Seating
                Requirements along with the typical tournament protocols of time
                periods, blind structure, etc. for running TeamPoker®
                Tournaments.
              </p>
              <p>
                {" "}
                <span className={AboutStyles.bold}>TP NON-CONTACT:</span> The
                preferred default method of seating is No-Contact, where
                teammates are not allowed together with opponents on the same
                table in tournaments. Teammates may play together or heads up
                during tournament table consolidation, but never on same table
                with opponents.{" "}
              </p>
              <p>
                <span className={AboutStyles.bold}>TP FULL-CONTACT:</span> The
                Full-Contact rule is the Standard Random Seating of Players and
                allows teammates on the same table with opponents. Considered a
                Pro-Seating Option, there is technically no possibility of
                collusion with Full-Contact as teammates are known and
                identified.
              </p>
              <p>
                {" "}
                <span className={AboutStyles.bold}>
                  TP HYBRID SEATING PROTOCOL:
                </span>{" "}
                Using TeamPoker® you can switch from Non-Contact to Full Contact
                at any time and it can be used at the end of tournament, as
                example, to conserve tables.
              </p>
            </div>
            <div className={AboutStyles.image}>
              <div
                className={classNames(AboutStyles.overlay, AboutStyles.color2)}
              ></div>
              <Img
                style={{}}
                imgStyle={{}}
                fluid={data.logo1.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
          <div className={AboutStyles.container}>
            <div className={AboutStyles.image}>
              <div
                className={classNames(AboutStyles.overlay, AboutStyles.color3)}
              ></div>
              <Img
                style={{}}
                imgStyle={{}}
                fluid={data.logo3.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div
              className={classNames(
                AboutStyles.details,
                AboutStyles.rightDetails
              )}
            >
              <h1>TeamPoker® Handicap</h1>
              <p>
                TeamPoker® allows the Tournament Director to structure any sized
                team event, and, team size can vary in the same tournament using
                the TP Handicap.{" "}
              </p>
              <p>
                <span className={AboutStyles.bold}>
                  The Handicap is the ratio of the max team size allowed divided
                  by the actual size within the minimum allowed by tournament
                  structure. This ratio is multiplied by the Teams Global Points
                  (inverse of finish position count);{" "}
                </span>
                and, Team Points are compared for Team Finish Position and Prize
                Pool Payout.{" "}
              </p>
              <p>
                <span className={AboutStyles.bold}>
                  The team score tie breaker is always the team with the highest
                  Individual Finish Position.
                </span>
              </p>
              <p>
                <span className={AboutStyles.bold}>CLASS TEAMS:</span> The{" "}
                <span className={AboutStyles.bold}>TP Handicap</span> system
                allows large{" "}
                <span className={AboutStyles.bold}>“CLASS TEAMS”</span> of
                varying size to compete as well in the same Tournament.
                Countries, Universities, or Women Versus Men as example can
                compete in the same event and overlay the basic Individual
                and/or Team Structure. Also,{" "}
                <span className={AboutStyles.bold}>
                  this patented Team Gaming System can be used for eSports.
                </span>
              </p>
              <p>
                <span className={AboutStyles.bold}>
                  {" "}
                  The TeamPoker® Handicap and Scoring System is the new paradigm
                  in tournament poker and gaming events where Individuals,
                  Teams, and Class Teams can handicap their skills (Reverse
                  Handicap) and compete for larger portion of glory and prize
                  pool.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={AboutStyles.headline}>
          <p>Help us make Poker a Team Sport!</p>
        </div>
        <div className={AboutStyles.contact}>
          <Link to="#" className={AboutStyles.button}>
            Contact Us to Learn More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
