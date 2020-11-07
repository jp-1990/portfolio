import React from "react"

import style from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.backgroundContainer}>
        <div className={style.titleBox}>
          <h3>Hi, I'm James</h3>
          <h1>WEB DEVELOPER</h1>
        </div>
        <div className={style.shape}></div>
        <div className={style.background}></div>
      </div>
    </div>
  )
}

export default Hero
