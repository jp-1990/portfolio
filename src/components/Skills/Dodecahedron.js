import React from "react"

import * as Di from "react-icons/di"
import * as Si from "react-icons/si"

import style from "./Dodecahedron.module.scss"

const Dodecahedron = ({ icons }) => {
  // generate icon components from contentful data source
  const iconsArray = icons.map(el => {
    const prefix = el.substring(0, 2)
    let Icon
    if (prefix === "Di") Icon = Di[el]
    if (prefix === "Si") Icon = Si[el]
    if (Icon) {
      return <Icon />
    }
    return <Di.DiCode />
  })

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <div className={style.front}>
          <div className={style.face1}>
            <i>{iconsArray[0] || <Di.DiCode />}</i>
          </div>
          <div className={style.face2}>
            <i>{iconsArray[1] || <Di.DiCode />}</i>
          </div>
          <div className={style.face3}>
            <i>{iconsArray[2] || <Di.DiCode />}</i>
          </div>
          <div className={style.face4}>
            <i>{iconsArray[3] || <Di.DiCode />}</i>
          </div>
          <div className={style.face5}>
            <i>{iconsArray[4] || <Di.DiCode />}</i>
          </div>
          <div className={style.face6}>
            <i>{iconsArray[5] || <Di.DiCode />}</i>
          </div>
        </div>
        <div className={style.back}>
          <div className={style.face1}>
            <i>{iconsArray[6] || <Di.DiCode />}</i>
          </div>
          <div className={style.face2}>
            <i>{iconsArray[7] || <Di.DiCode />}</i>
          </div>
          <div className={style.face3}>
            <i>{iconsArray[8] || <Di.DiCode />}</i>
          </div>
          <div className={style.face4}>
            <i>{iconsArray[9] || <Di.DiCode />}</i>
          </div>
          <div className={style.face5}>
            <i>{iconsArray[10] || <Di.DiCode />}</i>
          </div>
          <div className={style.face6}>
            <i>{iconsArray[11] || <Di.DiCode />}</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dodecahedron
