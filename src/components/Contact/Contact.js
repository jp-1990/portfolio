import React from "react"

import Section from "../Common/Section"
import SectionTitle from "../Common/SectionTitle"
import Wedge from "../Common/Wedge"

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
      <div style={{ height: "900px" }}></div>
    </Section>
  )
}

export default Contact
