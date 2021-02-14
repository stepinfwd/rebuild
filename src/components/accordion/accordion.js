import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import dash2 from "./images/mykinsta-dashboard-v8@2x.jpg";
import next from "./images/s.svg";
import "./accordion.scss";

class ManageAccordion extends Component {
  state = {};
  render() {
    return (
      <div className="manage-accordion-global ">
        <div className="container-fluid accordion-custom-padding-0">
          <div className="row">
            <div className=" col-xl-7 order-xl-12 accordion-custom-padding-0">
              <h2 className="accordion-header">
                Cartmaker is site Ecommerce reimagined
              </h2>
              <div className="accordion-image-section-container ">
                <div className="accordion-image-section ">
                  <img src={dash2} alt=""></img>
                </div>
              </div>
            </div>
            <div className=" col-xl-5 order-xl-1  accordion-custom-padding-0">
              <h2 className="XL-accordion-header">
                Cartmaker is site Ecommerce reimagined
              </h2>
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
                      Dashboard overview of all your Products
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      Cartmaker is the control center for your sites. From
                      Inventory management, visitor authentication to shipping
                      and Product review collection, all the tools you need to
                      run an ecommerce are in one convenient location
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
                      powerful and purpose-built E-commerce management tool{" "}
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body
                      style={{ textAlign: "left", marginLeft: ".8rem" }}
                    >
                      {" "}
                      Lets you track important data for each of your Products
                      separately; such as visitors, orders, Prices,inventory and
                      more.
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
                      Cartmaker was built from the get-go as a companion to our
                      services. It allows you to manage your sites with the ease
                      and precision you would expect from Cartmaker.
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
                      Our powerful multi-user feature allows you to add any
                      number of users to your team. Give them access to all your
                      sites, just billing or add them as developers or
                      administrators to a subset of your sites.{" "}
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
