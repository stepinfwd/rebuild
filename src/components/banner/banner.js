import React, { Component } from "react";
import "./banner.scss";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner-global">
        <div className="container banner-large">
          <div className="row">
            <div className="col-xs-12 col-md-6 ">
              <h3 className="banner-text-heading">
                Premium WordPress hosting for everyone, small or large
              </h3>

              <p>
                Kinsta is a managed WordPress hosting provider that helps take
                care of all your needs regarding your website. We run our
                services on cutting-edge technology and take support seriously
              </p>
              <div className="banner-button-container">
                <button
                  type="button "
                  className="btn btn-default banner-custom-btn"
                >
                  TRY A FREE DEMO
                </button>
              </div>
            </div>
            <div className="banner-image-container col-md-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
