import React from "react"

const Section = ({ name, children }) => {
  const style = { display: "flex", padding: "50px 0px" }
  return (
    <section id={name} style={style}>
      {children}
    </section>
  )
}

export default Section
