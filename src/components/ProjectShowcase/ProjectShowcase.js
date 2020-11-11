import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Project from "./Project"
import style from "./Projects.module.scss"

const ProjectShowcase = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            subtitle
            hosting
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulProjectDescriptionRichTextNode {
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
  const data = []
  queryData.allContentfulProject.edges.forEach(el => {
    data.push({
      title: el.node.title,
      subtitle: el.node.subtitle,
      hosting: el.node.hosting,
      image: el.node.image.fluid.src,
      imageAlt: el.node.title,
      description: "",
    })
  })
  queryData.allContentfulProjectDescriptionRichTextNode.edges.forEach(
    (el, i) => {
      data[i].description = el.node.childContentfulRichText.html
    }
  )

  const projectsJsx = data.map((el, i) => {
    return <Project key={i} data={el} side={i} />
  })

  return (
    <Section name="projects">
      <div className={style.containerTop}>
        <div className={style.wedgeTop}></div>
      </div>
      <SectionTitle
        title="PROJECTS"
        side="right"
        color="rgb(180, 180, 180)"
        hover="secondary"
      />
      <div className={style.projectBuffer}></div>
      {projectsJsx}
      {projectsJsx}
      <div className={style.projectBuffer}></div>
      <div className={style.containerBot}>
        <div className={style.wedgeBot}></div>
      </div>
    </Section>
  )
}

export default ProjectShowcase
