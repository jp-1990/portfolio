/* eslint-disable */
import React, { useState, useEffect } from "react"
import NavItems from "./NavItems"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuState, setMenuState] = useState("closed")
  const [widthHeight, setWidthHeight] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  // reset width and height on resize
  useEffect(() => {
    const handleResize = () => {
      setWidthHeight([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", handleResize)
    return _ => window.removeEventListener("resize", handleResize)
  })

  // once the window has scrolled, set scrolled
  useEffect(() => {
    const scrollHandler = () => {
      let display
      if (document.getElementById("indexMain")) {
        display =
          Math.abs(
            document.getElementById("indexMain").getBoundingClientRect().y
          ) >=
          widthHeight[1] - 64
      }

      if (display !== true) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrolled, widthHeight])

  // close menu if scrolled changes
  useEffect(() => {
    if (menuState === "open") {
      setMenuState("closed")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  // toggle mobile menu
  const toggleMenuHandler = () => {
    if (menuState === "closed") {
      setMenuState("open")
      document.getElementById("navbar").classList.remove(styles.closed)
      document.getElementById("navbar").classList.add(styles.open)
    } else {
      setMenuState("closed")
      document.getElementById("navbar").classList.remove(styles.open)
      document.getElementById("navbar").classList.add(styles.closed)
    }
  }

  // mobile nav bar jsx
  const mobileNavJsx = () => {
    return (
      <>
        <div className={styles.Container} onClick={toggleMenuHandler}>
          <div
            className={
              menuState === "open"
                ? `${styles.Hamburger} ${styles.MenuOpen}`
                : styles.Hamburger
            }
          ></div>
        </div>
        <div>
          <NavItems
            menuFunc={toggleMenuHandler}
            styles={menuState === "open" ? "mobNav" : "None"}
          />
        </div>
      </>
    )
  }

  // standard nav bar jsx
  const standardNavJsx = () => {
    return (
      <div className={styles.standardNav}>
        <NavItems />
      </div>
    )
  }

  return (
    <nav
      id="navbar"
      className={scrolled ? styles.Menu : styles.None}
      style={
        scrolled
          ? { position: "fixed", zIndex: "500" }
          : { position: "absolute", zIndex: "500" }
      }
    >
      <div
        className={styles.logo}
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.scroll({
            left: 0,
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <span>// Back to top </span>
      </div>
      {widthHeight[0] < 993 ? mobileNavJsx() : standardNavJsx()}
    </nav>
  )
}

export default Navbar
