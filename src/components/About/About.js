import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { VscFilePdf } from "react-icons/vsc"
import { DiGithubBadge } from "react-icons/di"
import { SiLinkedin } from "react-icons/si"
import { IconContext } from "react-icons"

import cv from "../../downloads/webDev_CV.pdf"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"

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
      <Wedge top="white" bottom="rgb(0, 123, 145)" />
      <SectionTitle title="ABOUT" side="left" color="white" hover="tertiary" />
      <div
        className={style.container}
        dangerouslySetInnerHTML={{
          __html: `<h2>${titleSentence}</h2> ${content}`,
        }}
      ></div>
      <div className={style.iconBox}>
        <IconContext.Provider
          value={{
            size: "4em",
            color: "white",
            verticalAlign: "middle",
          }}
        >
          <a href="https://github.com/jp-1990" target="_blank" rel="noreferrer">
            <DiGithubBadge />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "3em",
            color: "white",
            verticalAlign: "middle",
          }}
        >
          <a
            href="https://www.linkedin.com/in/james-plummer-73267712b/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </IconContext.Provider>
        <div className={style.cv}>
          <a href={cv} target="_blank" rel="noreferrer">
            <IconContext.Provider
              value={{
                color: "rgb(0, 123, 145)",
                verticalAlign: "middle",
                size: "0.8em",
              }}
            >
              <VscFilePdf />
            </IconContext.Provider>
            <span>CV</span>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default About
