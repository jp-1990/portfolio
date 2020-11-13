import React from "react"
import { IconContext } from "react-icons"
import { DiGithubBadge, DiHeroku } from "react-icons/di"
import { SiFirebase } from "react-icons/si"

import Button from "../Common/Button"
import style from "./Projects.module.scss"

const Project = ({ data, side }) => {
  const openInNewTab = url => {
    console.log("testing")
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  const icons = {
    github: <DiGithubBadge />,
    heroku: <DiHeroku />,
    firebase: <SiFirebase />,
  }

  data.description = data.description.replace("</p>", "</p><br>")

  const left = (
    <div className={`${style.projectWrapper} ${style.left}`}>
      <div className={style.projectText}>
        <div className={style.projectTitles}>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <div className={style.mobileImage}>
            <img src={data.image} alt={data.imageAlt} />
          </div>
        </div>
        <div
          className={style.projectDescription}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className={style.buttons}>
          <Button title="View Code" action={() => openInNewTab(data.github)}>
            <IconContext.Provider value={{ size: "1.4em" }}>
              {icons.github}
            </IconContext.Provider>
          </Button>
          <Button title="Visit Site" action={() => openInNewTab(data.link)}>
            {icons[data.hosting]}
          </Button>
        </div>
      </div>
      <div className={style.projectImage}>
        <img src={data.image} alt={data.imageAlt} />
      </div>
    </div>
  )

  const right = (
    <div className={`${style.projectWrapper} ${style.right}`}>
      <div className={style.projectImage}>
        <img src={data.image} alt={data.imageAlt} />
      </div>
      <div className={style.projectText}>
        <div className={style.projectTitles}>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <div className={style.mobileImage}>
            <img src={data.image} alt={data.imageAlt} />
          </div>
        </div>
        <div
          className={style.projectDescription}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className={style.buttons}>
          <Button title="View Code" action={() => openInNewTab(data.github)}>
            <IconContext.Provider value={{ size: "1.4em" }}>
              {icons.github}
            </IconContext.Provider>
          </Button>
          <Button title="Visit Site" action={() => openInNewTab(data.link)}>
            {icons[data.hosting]}
          </Button>
        </div>
      </div>
    </div>
  )
  return <>{side % 2 === 1 ? left : right}</>
}

export default Project
