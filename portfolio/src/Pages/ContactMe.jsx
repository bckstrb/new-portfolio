import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

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
        {/* <h1>Get in touch</h1> */}
        <form ref={form} onSubmit={sendEmail}>
          <input className="form" type="text" name="user_name" placeholder="Name" />
          <input className="form" type="email" name="user_email" placeholder="Email" />
          <textarea className="form textarea" name="message" placeholder="Message" />
          <input className="form" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
