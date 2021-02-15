import React from "react";
import { useState, useEffect } from "react";
import "./Modal.scss";
import { Button, Modal, Form, Col } from "react-bootstrap";
import closeImg from "../../Cart maker logo/images/close.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../firebase.js";

function ReusableModal(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phno: "",
  });
  const notify = () => toast("Thank you for getting in touch!");

  const contactHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const contactSave = (e) => {
    e.preventDefault();
    db.collection("details")
      .add({
        name: contact.name,
        email: contact.email,
        phno: contact.phno,
      })
      .then(() => {
        notify();
        props.onHide();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          <img
            onClick={props.onHide}
            className="align-button"
            src={closeImg}
            alt=""
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control
              onChange={contactHandler}
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="details-input"
            />
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              onChange={contactHandler}
              name="email"
              type="email"
              placeholder="Enter Your email"
              className="details-input"
              feedback="wrrw"
            />
            <Form.Label className="form-label">Phone number</Form.Label>
            <Form.Control
              onChange={contactHandler}
              name="phno"
              type="number"
              placeholder="Enter Your Phone Number"
              className="details-input"
              feedback
            />
          </Form.Group>
        </Form.Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "teal" }}
          className="modal-button"
          onClick={props.onHide}
        >
          Close
        </Button>
        <Button
          style={{ backgroundColor: "teal" }}
          className="modal-button"
          onClick={contactSave}
          type="submit"
        >
          Save
        </Button>
        <ToastContainer className="toast-container" />
      </Modal.Footer>
    </Modal>
  );
}

export default ReusableModal;
