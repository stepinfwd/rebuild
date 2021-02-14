import React from "react";
import "./banner.scss";
import ReusableModal from "../components/Modal";
import { Button, Modal } from "react-bootstrap";

function Banner() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="banner-global">
      <div className="container banner-large">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <h1 className="banner-text-heading">
              Fully managed headless e-commerce
            </h1>

            <p>
              Cartmaker is a headless Ecommerce Builder. Build your full control
              ecommerce with easily integrating API’s having a scalable custom
              storefront
            </p>
            <div className="banner-button-container">
              <button
                type="button "
                className="btn btn-default banner-custom-btn"
                onClick={() => setModalShow(true)}
              >
                TRY A FREE DEMO
              </button>
              <ReusableModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
          <div className="banner-image-container col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
