import React from "react";
import "./Modal.scss";
import { Button, Modal, Form, FormGroup, Col } from "react-bootstrap";

function ReusableModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label className="form-label">Phno</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number" />
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
          onClick={props.onHide}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReusableModal;
