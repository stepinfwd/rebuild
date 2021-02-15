import React from "react";
import { useState, useEffect } from "react";
import "./Modal.scss";
import { Button, Modal, Form, Col } from "react-bootstrap";
import closeImg from "../../Cart maker logo/images/close.png";

function ReusableModal(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phno: "",
  });
  const contactHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log("contact isFinite", contact);
  };
  const contactSave = (e) => {
    e.preventDefault();

    // api call
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <img onClick={props.onHide} className="align-button" src={closeImg} alt="" />
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
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
            />
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              onChange={contactHandler}
              name="email"
              type="email"
              placeholder="Enter Your email"
            />
            <Form.Label className="form-label">Phno</Form.Label>
            <Form.Control
              onChange={contactHandler}
              name="phno"
              type="number"
              placeholder="Enter Your Phone Number"
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
      </Modal.Footer>
    </Modal>
  );
}

export default ReusableModal;