import React from "react"

import Button from "../Common/Button"
import { IconContext } from "react-icons"
import {
  DiGithubBadge,
  DiCss3,
  DiGit,
  DiHtml5,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di"
import {
  SiAmazonaws,
  SiDocker,
  SiLinkedin,
  SiFirebase,
  SiKubernetes,
  SiGraphql,
  SiRedux,
  SiTypescript,
  SiTestinglibrary,
} from "react-icons/si"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { VscFilePdf } from "react-icons/vsc"

import cv from "../../downloads/webDev_CV.pdf"

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
            <a href={cv} target="_blank" rel="noreferrer">
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
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <SiTypescript />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: "1.45em", color: "white", verticalAlign: "middle" }}
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
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <DiNodejsSmall />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <DiGit />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <DiReact />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: "1.2em", color: "white", verticalAlign: "middle" }}
          >
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              <SiRedux />
            </a>
            <a
              href="https://testing-library.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiTestinglibrary />
            </a>
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              <SiGraphql />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiFirebase />
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <SiDocker />
            </a>
            <a href="https://kubernetes.io/" target="_blank" rel="noreferrer">
              <SiKubernetes />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: "1.4em", color: "white", verticalAlign: "middle" }}
          >
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
              <SiAmazonaws />
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
