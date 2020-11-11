import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"

import style from "./About.module.scss"

const About = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            titleSentence
          }
        }
      }
      allContentfulAboutContentRichTextNode {
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

  const titleSentence = queryData.allContentfulAbout.edges[0].node.titleSentence
  const content =
    queryData.allContentfulAboutContentRichTextNode.edges[0].node
      .childContentfulRichText.html

  return (
    <Section name="about" type="primary">
      <SectionTitle title="ABOUT" side="left" color="white" hover="tertiary" />
      <div
        className={style.container}
        dangerouslySetInnerHTML={{
          __html: `<h2>${titleSentence}</h2> ${content}`,
        }}
      ></div>
    </Section>
  )
}

export default About
