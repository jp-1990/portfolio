import React, { useState } from "react"
import emailjs from "emailjs-com"

import style from "./Contact.module.scss"

const FormCard = () => {
  const [toast, setToast] = useState(false)

  // send email with emailJS
  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "portfolio_contact_form",
        "portfolio_contact_form",
        e.target,
        "user_Zja9UaqaNb26pNRFvD4Wo"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    setToast(true)
    setTimeout(() => {
      setToast(false)
      flipHandler()
    }, 2000)
    e.target.reset()
  }

  // check if target contains child
  const childOrSelf = (parent, child) => {
    if (!parent || !child) return false
    let el = child
    while (el !== null) {
      if (el === parent) {
        return true
      }
      el = el.parentNode
    }
    return false
  }

  // flip form card on enter or click
  const flipHandler = e => {
    if (e?.keyCode && e?.keyCode !== 13) {
      return
    }
    if (childOrSelf(document?.querySelector(`.contact-form`), e?.target)) {
      return
    }
    document
      .querySelector(`.${style.inner}`)
      .classList.toggle(`${style.flipped}`)
  }

  return (
    <div className={style.formCard}>
      <div
        role="button"
        tabIndex="0"
        className={style.inner}
        onClick={e => flipHandler(e)}
        onKeyDown={e => flipHandler(e)}
      >
        <div className={`${style.face} ${style.front}`}>
          <h1>Let's talk...</h1>
          <span>[ CLICK ME ]</span>
        </div>
        <div className={`${style.face} ${style.back}`}>
          <div className={style.formWrapper}>
            <form // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
              className="contact-form"
              onSubmit={sendEmail}
            >
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" />
              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
            <div
              className={toast ? style.toast : `${style.toast} ${style.hidden}`}
            >
              Message sent
            </div>
          </div>
        </div>

        <div className={`${style.face} ${style.left}`}></div>
      </div>
    </div>
  )
}

export default FormCard
