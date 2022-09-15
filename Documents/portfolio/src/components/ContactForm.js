import "../css/ContactForm.css"
import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <div className="contact-heading">
            <h1>Let's get in touch</h1>
        </div>
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" />
                <button className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm