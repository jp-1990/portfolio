import React from "react"

import { IconContext } from "react-icons"
import { DiGithubBadge } from "react-icons/di"
import { SiLinkedin } from "react-icons/si"
import { VscFilePdf } from "react-icons/vsc"

import cv from "../../downloads/webDev_CV.pdf"
import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <span>© 2020 J.Plummer. All rights reserved.</span>
        <div className={style.icons}>
          <IconContext.Provider
            value={{ color: "white", verticalAlign: "middle", size: "1.4em" }}
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
            value={{ color: "white", verticalAlign: "middle" }}
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
      </div>
    </footer>
  )
}

export default Footer
