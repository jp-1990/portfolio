import React from "react"
import NavItem from "./NavItem"
import styles from "./Navbar.module.scss"

const NavItems = props => {
  return (
    <ul id="nav-mobile" className={styles[props.styles]}>
      <NavItem scroll={"projects"} menuFunc={props.menuFunc}>
        Projects
      </NavItem>
      <NavItem scroll={"about"} menuFunc={props.menuFunc}>
        About
      </NavItem>
      <NavItem scroll={"skills"} menuFunc={props.menuFunc}>
        Skills
      </NavItem>
      <NavItem scroll={"contact"} menuFunc={props.menuFunc}>
        Contact
      </NavItem>
    </ul>
  )
}

export default NavItems
