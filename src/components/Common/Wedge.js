import React from "react"

import style from "./Wedge.module.scss"

const Wedge = ({ top, bottom }) => {
  return (
    <div style={{ backgroundColor: top }} className={style.container}>
      <div style={{ backgroundColor: bottom }} className={style.wedge}></div>
    </div>
  )
}

export default Wedge
