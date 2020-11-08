import React from "react"
import style from "./Button.module.scss"

const Button = ({ action, title, children }) => {
  return (
    <button className={style.button} onClick={action ? action : null}>
      {title ? <span>{title}</span> : null}
      {children ? <i>{children}</i> : null}
    </button>
  )
}

export default Button
