import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"
import IconCard from "./IconCard"
import FormCard from "./FormCard"
import { IconContext } from "react-icons"
import { MdPhone, MdEmail } from "react-icons/md"
import { DiGithubBadge } from "react-icons/di"

import style from "./Contact.module.scss"

const Contact = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            email
            github
            githubLink
            number
          }
        }
      }
    }
  `)
  const data = {
    email: queryData.allContentfulContact.edges[0].node.email,
    number: queryData.allContentfulContact.edges[0].node.number,
    github: queryData.allContentfulContact.edges[0].node.github,
    githubLink: queryData.allContentfulContact.edges[0].node.githubLink,
  }

  return (
    <Section name="contact" type="secondary">
      <Wedge top="white" bottom="rgb(0, 172, 202)" />
      <SectionTitle
        title="CONTACT"
        side="left"
        color="rgb(245, 245, 245)"
        hover="primary"
      />

      <div className={style.container}>
        <div className={style.cardbox}>
          <IconCard content={data.number}>
            <IconContext.Provider
              value={{ size: "3.5em", color: "white", verticalAlign: "middle" }}
            >
              <MdPhone />
            </IconContext.Provider>
          </IconCard>
          <IconCard content={data.email}>
            <IconContext.Provider
              value={{ size: "3.5em", color: "white", verticalAlign: "middle" }}
            >
              <MdEmail />
            </IconContext.Provider>
          </IconCard>
          <IconCard content={data.github} link={data.githubLink}>
            <IconContext.Provider
              value={{
                size: "4em",
                color: "white",
                verticalAlign: "middle",
              }}
            >
              <DiGithubBadge />
            </IconContext.Provider>
          </IconCard>
        </div>

        <FormCard />
      </div>
    </Section>
  )
}

export default Contact
