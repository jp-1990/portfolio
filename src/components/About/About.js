import React from "react"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"

import style from "./About.module.scss"

const About = () => {
  return (
    <Section name="about" type="primary">
      <SectionTitle title="ABOUT" side="left" color="white" hover="tertiary" />
      <div className={style.container}>
        <h2>
          I'm James, an aspiring full-stack web developer from Norwich, England.
        </h2>
        <p>
          My interest in programming ignited when I offered to improve a
          previous employer's invoicing system. Armed with very little
          knowledge, Microsoft Excel, VBA, and a passion for problem solving, I
          embarked on a project that opened a door that I didn't even know I was
          looking for.
        </p>
        <p>
          Since then I've applied my focus to web development. Every project I
          have worked on has taught me something new, and challenged me to
          further expand my skills. I enjoy problem solving, and have found that
          programming is an ideal medium to indulge this pastime.
        </p>
        <p>
          From my first experience of reading Excel cell values in VBA, to
          creating full-stack JavaScript applications, my motivations to improve
          my skills in this field have only increased.
        </p>
      </div>
    </Section>
  )
}

export default About
