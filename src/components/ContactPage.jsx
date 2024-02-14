import React from "react";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <h1>Contact</h1>
      <form>
        <label>Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="text" />
        <label>Message: </label>
        <input className="messageInput" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
