import React from "react"
import { IconContext } from "react-icons"
import * as Di from "react-icons/di"
import * as Si from "react-icons/si"

import Button from "../Common/Button"
import style from "./Projects.module.scss"

const Project = ({ data, side }) => {
  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  const icons = {
    github: <Di.DiGithubBadge />,
    heroku: <Di.DiHeroku />,
    firebase: <Si.SiFirebase />,
    netlify: <Si.Netlify />,
  }

  data.description = data.description.replace("</p>", "</p><br>")

  const iconsArray = data?.icons?.map((el, i) => {
    const title = el.split("///")[0]
    const iconPrefix = el.split("///")[1].substring(0, 2)
    const link = el.split("///")[2]
    let Icon
    if (iconPrefix === "Di") Icon = Di[el.split("///")[1]]
    if (iconPrefix === "Si") Icon = Si[el.split("///")[1]]
    console.log(Icon)
    return (
      <a
        key={i}
        className={style.icon}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Icon />
        <span>{title}</span>
      </a>
    )
  })

  const left = (
    <div className={`${style.projectWrapper} ${style.left}`}>
      <div className={style.projectText}>
        <div className={style.projectTitles}>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <div className={style.mobileImage}>
            <img src={data.image} alt={data.imageAlt} />
            <div className={style.logos} style={{ justifyContent: "center" }}>
              {iconsArray}
            </div>
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
        <div className={style.logos} style={{ justifyContent: "flex-start" }}>
          {iconsArray}
        </div>
      </div>
    </div>
  )

  const right = (
    <div className={`${style.projectWrapper} ${style.right}`}>
      <div className={style.projectImage}>
        <img src={data.image} alt={data.imageAlt} />
        <div className={style.logos} style={{ justifyContent: "flex-end" }}>
          {iconsArray}
        </div>
      </div>
      <div className={style.projectText}>
        <div className={style.projectTitles}>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <div className={style.mobileImage}>
            <img src={data.image} alt={data.imageAlt} />
            <div className={style.logos} style={{ justifyContent: "center" }}>
              {iconsArray}
            </div>
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
