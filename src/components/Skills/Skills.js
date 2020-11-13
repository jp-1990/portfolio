import React from "react"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"

import style from "./Skills.module.scss"

const Skills = () => {
  return (
    <Section name="skills">
      <div className={style.containerTop}>
        <div className={style.wedgeTop}></div>
      </div>
      <SectionTitle
        title="SKILLS"
        side="right"
        color=" rgb(180, 180, 180)"
        hover="secondary"
      />
      <div style={{ height: "800px" }}></div>
      <div className={style.containerBot}>
        <div className={style.wedgeBot}></div>
      </div>
    </Section>
  )
}

export default Skills
