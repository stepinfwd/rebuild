import React from "react";
import feature2 from "./images/Active Support-amico.svg";
import feature3 from "./images/Powerful-bro.svg";
import feature1 from "./images/Meditation-bro.svg";
import "./work.scss";
const Work = () => {
  return (
    <div className="container work-global-container">
      <div className=" ">
        <h3 className="work-main-heading">Cartmaker Works For You</h3>
        <p className="work-sub-heading-description">
          Our clients love us because we never settle on these
        </p>
        <div className="work-three-column-layout  row">
          <div className=" col-md-4 work-each-column">
            <img src={feature1} alt="" />
            <h4>Peace of mind</h4>
            <p>
              You’re free to focus on growing your business, Let us handle your
              Back-end. Always running, monitored, and scaling on-demand.
            </p>
          </div>
          <div className=" col-md-4 work-each-column">
            <img src={feature2} alt="" />
            <h4>Support that cares</h4>
            <p>
              It's easy to get to us. Let us provide the support for technical
              queries and complaints on the spot.
            </p>
          </div>
          <div className=" col-md-4 work-each-column">
            <img src={feature3} alt="" />
            <h4>User-friendly, yet powerful</h4>
            <p>
              Spend less time managing the store . You’re free to pay attention
              in bringing customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
