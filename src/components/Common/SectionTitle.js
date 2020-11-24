import React, { useState, useEffect } from "react"

import style from "./SectionTitle.module.scss"

const SectionTitle = ({ title, side, color, hover }) => {
  const [sectionY, setSectionY] = useState(0)
  const [positionStyles, setPositionStyles] = useState()
  let position

  // detect position of parent section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSectionY(
        Math.round(
          document.getElementById(title.toLowerCase()).getBoundingClientRect().y
        ),
        title
      )
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionY, title])

  useEffect(() => {
    // styles
    setPositionStyles({
      top: {
        position: "absolute",
        top: "6em",
        color: color,
      },
      fixed: {
        position: "fixed",
        top: "7.3em",
        color: color,
      },
      bottom: {
        position: "absolute",
        top: `${
          document?.getElementById(title.toLowerCase())?.getBoundingClientRect()
            .height -
          window.innerHeight +
          100
        }px`,
        color: color,
      },
    })
  }, [color, title])

  // select style based on window location relative to section
  if (sectionY >= 0) {
    position = "top"
  } else if (
    sectionY >=
    window.innerHeight -
      document.getElementById(title.toLowerCase()).getBoundingClientRect()
        .height +
      122
  ) {
    position = "fixed"
  } else if (
    sectionY <
    window.innerHeight -
      document.getElementById(title.toLowerCase()).getBoundingClientRect()
        .height +
      122
  ) {
    position = "bottom"
  }

  // generate title as inidivudal h1 elements
  let output
  if (title) {
    output = title.split("").map((el, i) => {
      return (
        <h1 key={i} className={hover ? style[hover] : null}>
          {el}
        </h1>
      )
    })
  }

  return (
    <div className={style.titleBox}>
      <span
        id={title.toUpperCase()}
        className={style[side]}
        style={
          title === "PROJECTS" && positionStyles
            ? positionStyles[position]
            : { color: color }
        }
      >
        {output}
      </span>
    </div>
  )
}

export default SectionTitle
