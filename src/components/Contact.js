import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContactStyles from "../styles/ContactPage.module.scss"
import axios from "axios"
import { useForm } from "react-hook-form"

toast.configure()
const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Licenses",
    message: "",
  })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const notify = () => {
    toast.info(
      "Your message has been successfully sent. We will contact you very soon!"
    )
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = async data => {
    const { name, email, phone, subject, message } = data
    const res = await axios.post(
      "https://server-tp.herokuapp.com/api/form",
      {
        name,
        email,
        phone,
        subject,
        message,
      },
      {
        headers: { "Content-Type": undefined },
      }
    )
    notify()
    if (res.status === 200) {
      setState({
        name: "",
        email: "",
        phone: "",
        subject: "Licenses",
        message: "",
      })
    }
  }

  return (
    <div className={ContactStyles.wrapper}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        style={{ fontSize: 22 }}
      />
      <div className={ContactStyles.title}>
        <h1>Let's work together</h1>
      </div>
      <div className={ContactStyles.headlinetop}>
        <p>
          Contact us for licenses, partnerships and live poker room software
          systems.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={ContactStyles.form}>
          <div className={ContactStyles.form_item}>
            <div>
              <label for="name">Name</label>
              <input
                ref={register({ required: true, maxLength: 20 })}
                id="name"
                name="name"
                value={state.name}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                ref={register({ required: true })}
                id="email"
                name="email"
                value={state.email}
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={ContactStyles.form_item}>
            <div>
              <label for="phone">Phone</label>
              <input
                ref={register({ required: true })}
                id="phone"
                name="phone"
                value={state.phone}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="subject">Subject</label>
              <select
                ref={register({ required: true })}
                id="subject"
                name="subject"
                onChange={handleChange}
              >
                <option value="licenses">Licenses</option>
                <option value="partnership">Partnership</option>
                <option value="software">Software Sytem</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className={ContactStyles.message}>
            <label for="message">Message</label>
            <textarea
              ref={register({ required: true })}
              rows={6}
              id="body"
              name="message"
              value={state.message}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className={ContactStyles.submit}>
            <button type="submit" className={ContactStyles.button}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
