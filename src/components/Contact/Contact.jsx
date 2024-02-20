import { Link, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

import "../Contact/Contact.css";


 const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };





  return (
    <>
      <h1>Contact Me</h1>
      <p>
       Are you interested in my work or have any questions about it? Get in touch and send me a message.
     </p>
        <form onSubmit={sendEmail}>
        <div className="form-box">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            {/* <button type="submit" value="Send" disabled={isSubmitting} /> */}
            <button className="sendBtn" type="submit">Send</button>
            {stateMessage && <p>{stateMessage}</p>}
        </div>
        </form>
     
    </>
  );
}

export default Contact;
