import React from "react";
import feature2 from "./images/Active Support-amico.svg";
import feature3 from "./images/Powerful-bro.svg";
import feature1 from "./images/Meditation-bro.svg";
import "./work.scss";
const Work = () => {
  return (
    <div className="container work-global-container">
      <div className="col-xs-12 ">
        <h3 className="work-main-heading">Cartmaker Works For You</h3>
        <p className="work-sub-heading-description">
          Our clients love us because we never settle on these
        </p>
        <div className="work-three-column-layout  row">
          <div className="col-sm-4 work-each-column">
            <img src={feature1} alt="" />
            <h4>Peace of mind</h4>
            <p>
              You’re free to focus on growing your business, let us handle your
              site. Always running, monitored, and scaling on-demand.
            </p>
          </div>
          <div className="col-sm-4 work-each-column">
            <img src={feature2} alt="" />
            <h4>Support that cares</h4>
            <p>
              You’re free to focus on growing your business, let us handle your
              site. Always running, monitored, and scaling on-demand.
            </p>
          </div>
          <div className="col-sm-4 work-each-column">
            <img src={feature3} alt="" />
            <h4>User-friendly, yet powerful</h4>
            <p>
              You’re free to focus on growing your business, let us handle your
              site. Always running, monitored, and scaling on-demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
