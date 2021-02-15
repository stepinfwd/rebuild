import React, { useState, useEffect } from "react";
import "./contact.scss";
import db from "../../firebase.js";
function Contact(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });
  const contactHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log("contact isFinite", contact.name);
  };
  const contactSave = (e) => {
    e.preventDefault();
    db.collection("contact")
      .add({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        sub: contact.sub,
      })
      .then(() => {
        alert("messafe submittes");
      })
      .catch((error) => {
        alert(error.message);
      });
    // setContact({ name: "", email: "", sub: "", message: "" });
    // api call
  };
  return (
    <div className="container contact-global">
      <h3>Any question in mind? Don’t Worry Contact Us.</h3>
      <form>
        <div className="form-group contact-form col-lg-6 colsm-12 cpl-xs-12">
          <input
            type="text"
            className="form-control input-focus"
            placeholder="Name."
            onChange={contactHandler}
            name="name"
            required
          />
          <input
            type="email"
            className="form-control input-focus"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@example.com"
            onChange={contactHandler}
            name="email"
            required
          />
          <input
            type="text"
            className="form-control input-focus"
            placeholder="subject."
            onChange={contactHandler}
            name="sub"
          />
          <textarea
            className="form-control input-focus"
            rows="6"
            id="form-message"
            placeholder="Enter your message."
            // name="form-message"
            required=""
            onChange={contactHandler}
            name="message"
            required={true}
          ></textarea>

          <button onClick={contactSave} type="submit">
            send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
