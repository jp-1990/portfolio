import React from "react"

import Button from "../Common/Button"
import { IconContext } from "react-icons"
import {
  DiGithubBadge,
  DiCss3,
  DiGit,
  DiHtml5,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di"
import {
  SiJavascript,
  SiLinkedin,
  SiGatsby,
  SiFirebase,
  SiGraphql,
} from "react-icons/si"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { VscFilePdf } from "react-icons/vsc"

import testing from "../../downloads/degree.pdf"

import style from "./Hero.module.scss"

const Hero = () => {
  const scrollHandler = () => {
    window.scroll({
      left: 0,
      top: document.getElementById("projects").offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <div className={style.hero}>
      <div className={style.backgroundContainer}>
        <div className={style.titleBox}>
          <h3>Hi, I'm James</h3>
          <h1>WEB DEVELOPER</h1>
          <Button title="PROJECTS" action={scrollHandler}>
            <IoIosArrowDropdownCircle />
          </Button>
        </div>
        <div className={style.iconBox}>
          <IconContext.Provider
            value={{
              size: "4em",
              color: "rgb(180, 180, 180)",
              verticalAlign: "middle",
            }}
          >
            <a
              href="https://github.com/jp-1990"
              target="_blank"
              rel="noreferrer"
            >
              <DiGithubBadge />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "3em",
              color: "rgb(180, 180, 180)",
              verticalAlign: "middle",
            }}
          >
            <a
              href="https://www.linkedin.com/in/james-plummer-73267712b/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </IconContext.Provider>
          <div className={style.cv}>
            <a href={testing} target="_blank" rel="noreferrer">
              <IconContext.Provider
                value={{
                  color: "white",
                  verticalAlign: "middle",
                  size: "0.8em",
                }}
              >
                <VscFilePdf />
              </IconContext.Provider>
              <span>CV</span>
            </a>
          </div>
        </div>
        <div className={style.iconHeader}>
          <IconContext.Provider
            value={{ size: "1.2em", color: "white", verticalAlign: "middle" }}
          >
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiJavascript />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: "1.4em", color: "white", verticalAlign: "middle" }}
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <DiHtml5 />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <DiCss3 />
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <DiSass />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <DiGit />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <DiMongodb />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <DiNodejsSmall />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <DiReact />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: "1.2em", color: "white", verticalAlign: "middle" }}
          >
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              <SiGraphql />
            </a>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiGatsby />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiFirebase />
            </a>
          </IconContext.Provider>
        </div>
        <div className={style.shape}></div>
        <div className={style.background}></div>
      </div>
    </div>
  )
}

export default Hero
