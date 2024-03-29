import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"
import Project from "./Project"

const ProjectShowcase = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            subtitle
            hosting
            link
            github
            icons
            image {
              fluid {
                src
              }
            }
            mp4 {
              file {
                url
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
      image: el.node.image?.fluid?.src,
      mp4: el.node.mp4?.file?.url,
      imageAlt: el.node.title,
      description: "",
      github: el.node.github,
      link: el.node.link,
      icons: el.node.icons,
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
      <Wedge bottom="white" top="rgb(0, 123, 145)" />
      <SectionTitle
        title="PROJECTS"
        side="right"
        color="rgb(180, 180, 180)"
        hover="secondary"
      />

      {projectsJsx}
    </Section>
  )
}

export default ProjectShowcase
