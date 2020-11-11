import React from "react"

const Section = ({ name, type, children }) => {
  const color = {
    primary: "rgb(0, 123, 145)",
    secondary: "rgb(0, 172, 202)",
  }
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px 0",
    alignItems: "center",
    backgroundColor: type ? color[type] : "white",
    position: "relative",
  }
  return (
    <section id={name} style={style}>
      {children}
    </section>
  )
}

export default Section
