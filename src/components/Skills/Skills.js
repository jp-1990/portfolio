import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"
import Dodecahedron from "./Dodecahedron"
import Hexagon from "./Hexagon"

import * as Di from "react-icons/di"
import * as Si from "react-icons/si"

import style from "./Skills.module.scss"

const Skills = () => {
  // raw query data
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulSkills {
        edges {
          node {
            title
            skill
          }
        }
      }
      allContentfulSkillsContentRichTextNode {
        edges {
          node {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  `)

  // refined data object
  const data = {
    titleSentence: queryData.allContentfulSkills.edges[0].node.title,
    content:
      queryData.allContentfulSkillsContentRichTextNode.edges[0].node
        .childContentfulRichText.html,
    skills: queryData.allContentfulSkills.edges[0].node.skill,
  }

  // array of icon names
  const icons = data.skills.map(el => el.split("///")[1])

  // generate two rows of hexagons
  const hexBoxTop = []
  const hexBoxBottom = []
  for (let i = 0; i < 11; i++) {
    const title = data.skills[i].split("///")[0]
    const iconPrefix = data.skills[i].split("///")[1].substring(0, 2)
    const link = data.skills[i].split("///")[2]
    let Icon
    if (iconPrefix === "Di") Icon = Di[data.skills[i].split("///")[1]]
    if (iconPrefix === "Si") Icon = Si[data.skills[i].split("///")[1]]

    if (Icon && i < 5) {
      hexBoxTop.push(
        <Hexagon key={title + i} title={title} link={link || null}>
          <Icon />
        </Hexagon>
      )
    } else if (Icon) {
      hexBoxBottom.push(
        <Hexagon key={title + i} title={title} link={link || null}>
          <Icon />
        </Hexagon>
      )
    } else if (i < 5) {
      hexBoxTop.push(
        <Hexagon key={title + i} title={title || "Code"} link={link || null}>
          <Di.DiCode />
        </Hexagon>
      )
    } else {
      hexBoxBottom.push(
        <Hexagon key={title + i} title={title || "Code"} link={link || null}>
          <Di.DiCode />
        </Hexagon>
      )
    }
  }

  return (
    <Section name="skills">
      <Wedge bottom="white" top="rgb(0, 123, 145)" />
      <div style={{ height: "40px" }}></div>
      <SectionTitle
        title="SKILLS"
        side="right"
        color=" rgb(180, 180, 180)"
        hover="secondary"
      />
      <div style={{ height: "850px" }} className={style.container}>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{
            __html: `<h2>${data.titleSentence}</h2> ${data.content}`,
          }}
        ></div>
        <div className={style.skills}>
          <div className={style.dodecahedronBox}>
            <div className={style.spacer}></div>
            <Dodecahedron icons={icons} />
          </div>
          <div className={style.hexagonBox}>
            <div className={style.top}>{hexBoxTop}</div>
            <div className={style.bottom}>{hexBoxBottom}</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills
