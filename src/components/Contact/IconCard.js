import React from "react"

import style from "./Contact.module.scss"

const IconCard = ({ children, content }) => {
  let output
  if (content.includes("github")) {
    output = (
      <a
        href="https://github.com/jp-1990"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  } else {
    output = content
  }
  return (
    <div className={style.iconCard}>
      <div className={style.content}>
        <div className={style.open}>
          <span>{output}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default IconCard
