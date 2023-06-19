import React from "react";
import "./Partner.css";
import main_banner from "../../media/partner_bannner.png";

function Partner() {
  return (
    <div
      className="main_banner2"
      style={{ backgroundImage: `url(${main_banner})`, height: "90vh" }}
    >
      <div className="container">
        <h2>
          Our Coworking <span className="top_gurgaon_span">Partners</span>
        </h2>
      </div>
    </div>
  );
}

export default Partner;
