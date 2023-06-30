import React from "react";
import "./SpaceExpert.css";
import robi from "../../media/robi.png";

function SpaceExpert() {
  return (
    <div className="space_expert_main">
      <div className="container">
        <h2>
          RoBi is our Office Space <span className="top_city_span">Expert</span>
        </h2>
        <div className="row">
          <div className="col-6">
            <div className="robi_img_box">
              <img className="img-fluid" src={robi} alt="robi" />
            </div>
          </div>
          <div className="col-6 contact_box">
            <div className="contact_us mb-4">
              <p>Call Us:</p>
              <a href="tel:+919999108078">+91 9999 10 8078</a>
            </div>
            <div className="contact_us">
              <p>Email Us:</p>
              <a href="mailto:robi@spacite.com">robi@spacite.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceExpert;
