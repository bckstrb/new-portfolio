import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./AboutMe.css";

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
    <div className="contact">
      {/* <h1>Contact Me</h1> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactMe;
