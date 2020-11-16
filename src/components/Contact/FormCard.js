import React from "react"
import emailjs from "emailjs-com"
import { debounce } from "lodash"

import style from "./Contact.module.scss"

const FormCard = () => {
  const sendEmail = debounce(
    e => {
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

      e.target.reset()
    },
    500,
    { trailing: true }
  )

  const flipHandler = e => {
    console.log(e.target)
    if (e.target === document.querySelector(`.contact-form`)) {
      return
    }
    document
      .querySelector(`.${style.inner}`)
      .classList.toggle(`${style.flipped}`)
  }

  const stopBubble = e => {
    e.stopPropagation()
  }
  return (
    <div className={style.formCard}>
      <div className={style.inner} onClick={e => flipHandler(e)}>
        <div className={`${style.face} ${style.front}`}>
          <h1>Let's talk...</h1>
          <span>[ CLICK ME ]</span>
        </div>
        <div className={`${style.face} ${style.back}`}>
          <div className={style.formWrapper}>
            <form
              onClick={e => stopBubble(e)}
              className="contact-form"
              onSubmit={sendEmail}
            >
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>

        <div className={`${style.face} ${style.left}`}></div>
      </div>
    </div>
  )
}

export default FormCard
