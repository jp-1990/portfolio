import React from "react"

const Section = ({ name, type, children }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px 0",
    alignItems: "center",
    backgroundColor: type === "color" ? "rgb(0, 123, 145)" : "white",
    position: "relative",
  }
  return (
    <section id={name} style={style}>
      {children}
    </section>
  )
}

export default Section
