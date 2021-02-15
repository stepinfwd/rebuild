import React,{useState,useEffect} from "react";
import "./contact.scss";
function Contact(props) {
  const  [contact, setContact]  = useState({name:"",email:"",sub:"",messa:""});
  const contactHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log("contact isFinite", contact);
  };
  const contactSave = (e) => {
    e.preventDefault();
   
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
          />
          <input
            type="email"
            className="form-control input-focus"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@example.com"
            onChange={contactHandler}
            name="email"
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
