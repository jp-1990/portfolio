import React from "react"

import style from "./Contact.module.scss"

const IconCard = ({ children, content, link }) => {
  let output
  if (link) {
    output = (
      <a href={link} target="_blank" rel="noopener noreferrer">
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
