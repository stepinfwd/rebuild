import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import dash1 from "./images/Dashboard-pana.svg";
import dash2 from "./images/mykinsta-dashboard-v8@2x.jpg";
import next from "./images/s.svg";
import "./accordion.scss";

class ManageAccordion extends Component {
  state = {};
  render() {
    return (
      <div className="manage-accordion-global ">
        <div className="container-fluid accordion-custom-padding-0">
          <div className="col-xs-12 col-sm-12 accordion-custom-padding-0">
            <h2 className="accordion-header">
              MyKinsta is site management reimagined
            </h2>

            <div className="accordion-image-section ">
              <img src={dash2} alt=""></img>
            </div>
            <div className="col-xs-12 col-sm-12 accordion-custom-padding-0">
              <Accordion
                defaultActiveKey="0"
                className="custom-accordion-bootstrap"
              >
                <Card
                  style={{
                    textAlign: "left",
                    backgroundColor: "#434343",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    style={{
                      border: "none",
                      backgroundColor: "#434343",
                      padding: ".8rem 0px",
                    }}
                  >
                    <div className="acc-flex">
                      <img className="svg-icon" src={next} alt=""></img>
                      Dashboard overview of all your sites
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      MyKinsta is the control center for your sites. From
                      tracking bandwidth, visitor stats to creating SSL
                      certificates, all the tools you need are in one convenient
                      location
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card
                  style={{
                    textAlign: "left",
                    backgroundColor: "#434343",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    style={{
                      border: "none",
                      backgroundColor: "#434343",
                      padding: ".8rem 0px",
                    }}
                  >
                    <div className="acc-flex">
                      <img className="svg-icon" src={next} alt=""></img>A
                      powerful and purpose-built WordPress hosting tool
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      {" "}
                      Our dashboard lets you track important data for each of
                      your sites separately; such as visitors, bandwidth usage,
                      response times, and more.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card
                  style={{
                    textAlign: "left",
                    backgroundColor: "#434343",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    style={{
                      border: "none",
                      backgroundColor: "#434343",
                      padding: ".8rem 0px",
                    }}
                  >
                    <div className="acc-flex">
                      <img className="svg-icon" src={next} alt=""></img>
                      Manage users with granular access rights
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      {" "}
                      MyKinsta is the control center for your sites. From
                      tracking bandwidth, visitor stats to creating SSL
                      certificates, all the tools you need are in one convenient
                      location
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card
                  style={{
                    textAlign: "left",
                    backgroundColor: "#434343",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="3"
                    style={{
                      border: "none",
                      backgroundColor: "#434343",
                      padding: ".8rem 0px",
                    }}
                  >
                    <div className="acc-flex">
                      <img className="svg-icon" src={next} alt=""></img>
                      Wide-range of analytics from website resources to
                      architecture performance
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      {" "}
                      MyKinsta is the control center for your sites. From
                      tracking bandwidth, visitor stats to creating SSL
                      certificates, all the tools you need are in one{" "}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageAccordion;
