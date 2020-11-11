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
  if (output.length < 8) {
    const len = 8 - output.length
    for (let i = 0; i < len; i++) {
      side === "right"
        ? output.push(
            <h1 key={i + 8} style={{ color: "transparent" }}>
              III
            </h1>
          )
        : output.unshift(
            <h1 key={i + 8} style={{ color: "transparent" }}>
              x
            </h1>
          )
    }
  }
  return (
    <div id={title} className={`${style.titleBox} ${style[side]}`}>
      <span style={{ color: `${color}` }}>{output}</span>
    </div>
  )
}

export default SectionTitle
