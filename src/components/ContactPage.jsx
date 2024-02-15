import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_fgob5cf";
  const templateId = "template_s8bncad";
  const publicKey = "8PMKhMX1-PNCW9h4V";

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
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
          type="text"
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
      </form>
    </div>
  );
};

export default ContactPage;
