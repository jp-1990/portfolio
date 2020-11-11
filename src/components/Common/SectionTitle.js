import React from "react"
import style from "./SectionTitle.module.scss"

const SectionTitle = ({ title, side, color, hover }) => {
  let output
  if (title) {
    output = title.split("").map((el, i) => {
      return (
        <h1 key={i} className={hover ? style[hover] : null}>
          {el}
        </h1>
      )
    })
  }

  return (
    <div id={title} className={style.titleBox}>
      <span className={style[side]} style={{ color: `${color}` }}>
        {output}
      </span>
    </div>
  )
}

export default SectionTitle
