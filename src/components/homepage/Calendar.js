import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ServicesStyles from "../../styles/calendar.module.scss"
import moment from "moment"
import "../../styles/calendar.module.scss"

const Calendar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvents(sort: { fields: date, order: DESC }) {
        edges {
          node {
            eventName
            date
            location
            link
          }
        }
      }
    }
  `)

  return (
    <div className={ServicesStyles.wrapper}>
      <div className={ServicesStyles.content}>
        <div className={ServicesStyles.header}>
          <h1>Up Coming Events</h1>
        </div>

        <div className={ServicesStyles.container}>
          <table>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Register/Results</th>
            </tr>
            {data.allContentfulEvents.edges.map(({ node }) => {
              const isUpComing = moment(
                moment(node.date).format("YYYY-MM-DD")
              ).isAfter(moment().format("YYYY-MM-DD"))

              return (
                <tr key={`${node.eventName}-${node.date}`}>
                  <td>{node.eventName}</td>
                  <td>{moment(node.date).format("MMM Do YYYY")}</td>
                  <td>{node.location}</td>
                  <td>
                    <a
                      href={node.link}
                      className={!isUpComing && ServicesStyles.pastEvents}
                      target="_blank"
                    >
                      {isUpComing ? "Register Now" : "Results"}
                    </a>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar
