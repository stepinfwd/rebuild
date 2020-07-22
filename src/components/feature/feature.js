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
    <div className="feature-card container">
      <div className="col-sm-12 ">
        <div className="feature-card-column main-feature-card-heading">
          <h3>FEATURES</h3>
          <p>These form the basis of our service.</p>
        </div>

        <div className="feature-card-column card-feature-list">
          <p>
            <span>
              <img className="feature-card-icons" src={manage} alt="" />
            </span>
            Fully managed
          </p>
          <p>
            <span>
              <img className="feature-card-icons" src={secure} alt="" />
            </span>
            Secure like fort Knox
          </p>

          <p>
            <span>
              <img className="feature-card-icons" src={migrate} alt="" />
            </span>
            Free migrations
          </p>
        </div>

        <div className="feature-card-column card-feature-list feature-list-padding-adjust">
          <p>
            {" "}
            <span>
              <img className="feature-card-icons" src={speed} alt="" />
            </span>
            Ultimate speed
          </p>

          <p>
            <span>
              <img className="feature-card-icons" src={backup} alt="" />
            </span>
            Daily backups
          </p>

          <p>
            <span>
              <img className="feature-card-icons" src={cloud} alt="" />
            </span>
            Google Cloud Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
