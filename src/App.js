import React, { Component } from "react";
import "./App.scss";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Banner from "./components/banner/banner";
import Feature from "./components/feature/feature";
import Footer from "./components/footer/footer";
import Work from "./components/work/work";
import ManageAccordion from "./components/accordion/accordion.js";
class App extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        if (this.state.status !== "diff") {
          this.setState({ status: "diff" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
          className="nav-container"
          style={{
            backgroundColor: this.state.status === "top" ? "" : "#fff",
            color: this.state.status === "top" ? "#fff" : "#fff",
          }}
        >
          <Navbar.Brand href="#home">CARTMAKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">PLANS</Nav.Link>
              <Nav.Link href="#features">FEATURES</Nav.Link>
              <Nav.Link href="#pricing">TEAM</Nav.Link>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
              {/* <Nav.Link href="#pricing">LOGIN</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Banner />
        <Feature />
        <Work />
        <ManageAccordion />
        <Footer />
      </div>
    );
  }
}

export default App;
