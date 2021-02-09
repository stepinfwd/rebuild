import React from "react";
import "./feature.scss";
import manage from "./images/icons8-client-management-30.png";
import secure from "./images/icons8-security-shield-64.png";
import speed from "./images/icons8-speed-100.png";
import backup from "./images/icons8-database-backup-64.png";
import migrate from "./images/icons8-health-data-30.png";
import cloud from "./images/icons8-cloud-50.png";

const Feature = () => {
  return (
    <div className="feature-card">
      <div className="container">
        <div className="row">
          <div className="feature-card-column main-feature-card-heading col-xl-4 ">
            <h3>FEATURES</h3>
            <p>These form the basis of our service.</p>
          </div>

          <div className="col-md-6 col-xl-4 ">
            <div className="feature-card-column card-feature-list ">
              <p>
                <span>
                  <img className="feature-card-icons" src={manage} alt="" />
                </span>
                Headless
              </p>
              <p className="feature-svg-flex">
                <span>
                  <img className="feature-card-icons" src={secure} alt="" />
                </span>
                Full Control
              </p>

              <p>
                <span>
                  <img className="feature-card-icons" src={migrate} alt="" />
                </span>
                Scalable
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 ">
            <div className="feature-card-column card-feature-list feature-list-padding-adjust">
              <p>
                {" "}
                <span>
                  <img className="feature-card-icons" src={speed} alt="" />
                </span>
                Easy Integration
              </p>

              <p>
                <span>
                  <img className="feature-card-icons" src={backup} alt="" />
                </span>
                Custom storefront
              </p>

              <p className="feature-svg-flex">
                <span>
                  <img className="feature-card-icons" src={cloud} alt="" />
                </span>
                payment and Shipping Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
