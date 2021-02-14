import React, { useRef } from "react";
import "./App.scss";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Banner from "./components/banner/banner";
import Feature from "./components/feature/feature";
import Footer from "./components/footer/footer";
import Work from "./components/work/work";
import ManageAccordion from "./components/accordion/accordion.js";
import Contact from "./components/contact/contact";
import logo from "../src/Cart maker logo/logo.jpg";

function App() {
  const scrollToRef = (key) => {
    window.scrollTo(0, key.current.offsetTop - 100);
  };
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const itemRef = [myRef, myRef1, myRef2, myRef3];

  const executeScroll = (key) => scrollToRef(key);

  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="nav-container"
        style={{
          backgroundColor: "#fff",
        }}
      >
        {/* <img style={{ height: "auto", width: "80px" }} src={logo}></img> */}
        <img className="navbar-logo" alt="" src={logo} width="60" />
        <Navbar.Brand href="#home">
          {" "}
          {/* <img
            alt=""
            src={logo}
            width="90"
            className="d-inline-block align-top"
          /> */}
          CARTMAKER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="#features"
              onClick={() => executeScroll(itemRef[0])}
            >
              PLANS
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => executeScroll(itemRef[1])}
            >
              FEATURES
            </Nav.Link>
            {/* <Nav.Link href="#pricing" onClick={() => executeScroll(itemRef[2])}>
              TEAM
            </Nav.Link> */}
            <Nav.Link href="#pricing" onClick={() => executeScroll(itemRef[3])}>
              CONTACT
            </Nav.Link>
            {/* <Nav.Link href="#pricing">LOGIN</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div ref={myRef}>
        <Banner />
      </div>

      <div ref={myRef1}>
        <Feature />
      </div>
      <div ref={myRef2}>
        <Work />
      </div>

      <div ref={myRef3}>
        <ManageAccordion />
      </div>
      <div ref={myRef3}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
