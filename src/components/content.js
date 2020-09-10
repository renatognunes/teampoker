import React from "react"
import contentStyles from "./content.module.scss"
import { Link } from "gatsby"

const content = props => {
  return (
    <div className={contentStyles.container}>
      <div>
        <div className={contentStyles.headline}>
          <h1>{props.text}</h1>
          {!props.hideButton && (
            <Link to={props.url}>
              <button className={contentStyles.button}>
                {props.buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
    // <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by macrovector - www.freepik.com</a>
  )
}

export default content
