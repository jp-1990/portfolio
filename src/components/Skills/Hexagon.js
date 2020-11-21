import React from "react"

import style from "./Hexagon.module.scss"

const Hexagon = ({ children, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={style.hexagon}>
        <div className={style.inner}>
          <div className={style.content}>
            {children}
            <span className={style.title}>{title}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Hexagon
