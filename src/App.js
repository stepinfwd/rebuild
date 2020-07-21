import React from "react";
import "./App.scss";
import Banner from "./components/banner/banner";
import Feature from "./components/feature/feature";
import Footer from "./components/footer/footer";
import Work from "./components/work/work";

function App() {
  return (
    <div className="App">
      <Banner />
      <Feature />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
