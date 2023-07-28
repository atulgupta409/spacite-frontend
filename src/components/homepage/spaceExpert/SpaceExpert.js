import React from "react";
import "./SpaceExpert.css";

function SpaceExpert() {
  return (
    <div className="space_expert_main mb-5">
      <div className="container">
        <h2>
          RoBi is our Office Space <span className="top_city_span">Expert</span>
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="robi_img_box text-center">
              <img
                className="w-50"
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
                alt="robi"
              />
            </div>
          </div>
          <div className="col-12 contact_box">
            <div className="contact_us text-center mt-3">
              <p>Write to RoBi:</p>
              <a href="mailto:thespacite@gmail.com">thespacite@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceExpert;
