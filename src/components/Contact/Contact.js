import React from "react"

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
          <IconCard content="07393293927">
            <IconContext.Provider
              value={{ size: "3.5em", color: "white", verticalAlign: "middle" }}
            >
              <MdPhone />
            </IconContext.Provider>
          </IconCard>
          <IconCard content="plum_1990@hotmail.co.uk">
            <IconContext.Provider
              value={{ size: "3.5em", color: "white", verticalAlign: "middle" }}
            >
              <MdEmail />
            </IconContext.Provider>
          </IconCard>
          <IconCard content="github.com/jp-1990">
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
