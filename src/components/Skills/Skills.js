import React from "react"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"

import style from "./Skills.module.scss"

const Skills = () => {
  return (
    <Section name="skills">
      <Wedge bottom="white" top="rgb(0, 123, 145)" />
      <SectionTitle
        title="SKILLS"
        side="right"
        color=" rgb(180, 180, 180)"
        hover="secondary"
      />
      <div style={{ height: "800px" }}></div>
    </Section>
  )
}

export default Skills
