import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { FaEnvelope } from "react-icons/fa"

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cy63gu9",
        "template_5u9ntok",
        form.current,
        "8tmhHZ_UQeawzqAUo"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div classNameName="contact">
        <p>Get in touch</p>
        <form ref={form} onSubmit={sendEmail}>
          <input className="form" type="text" name="user_name" placeholder="Name" />
          <input className="form" type="email" name="user_email" placeholder="Email" />
          <textarea className="form textarea" name="message" placeholder="Message" />
          <input className="form" type="submit" value="Send" />
        </form>
        <div>
          <h2><FaEnvelope color="grey" /> rbccstrb@gmail.com</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
