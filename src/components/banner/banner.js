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
                Fully managed headless e-commerce
              </h3>

              <p>
                Cartmaker is a headless Ecommerce Builder. Build your full
                control ecommerce with easily integrating API’s having a
                scalable custom storefront
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
