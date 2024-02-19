import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const serviceId = "service_fgob5cf";
  const templateId = "template_s8bncad";
  const publicKey = "8PMKhMX1-PNCW9h4V";

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateForm = (name, email, message) => {
    if (name.length < 1 || email.length < 1 || message.length < 1) {
      setUserMessage("Please fill out all fields");
      return false;
    }
    if (!validateEmail) {
      setMessage("Invalid email address");
      return false;
    } else return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(name, email, message)) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setUserMessage("Thanks for reaching out!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          setUserMessage("Something went wrong");
        });
    }
  };

  return (
    <div className="contactPage">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message: </label>
        <input
          className="messageInput"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p>{userMessage}</p>
      </form>
    </div>
  );
};

export default ContactPage;
