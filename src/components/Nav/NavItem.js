/* eslint-disable */
import React from "react"

const navItem = props => {
  const scrollHandler = scroll => {
    window.scroll({
      left: 0,
      top:
        document.getElementById(scroll).offsetTop +
        (props.scroll === "projects" ? 45 : 0),
      behavior: "smooth",
    })
    if (props.menuFunc) props.menuFunc("closed")
  }
  return (
    <li
      style={{ listStyle: "none" }}
      onClick={() => scrollHandler(props.scroll)}
    >
      <span> {props.children}</span>
    </li>
  )
}

export default navItem
