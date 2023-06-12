import React from "react";
import "./Facility.css";
import facilityBanner from "../../media/page_banner/whatWeOffer-banner.png";

function Facility() {
  return (
    <div
      className="facility_main"
      style={{ backgroundImage: `url(${facilityBanner})` }}
    >
      <div className="container">
        <h3 className="sub_heading">
          <span>Best</span> Coworking space for you
        </h3>
        <h2>What we offer to you</h2>
        <div className="row facility_box">
          <div className="col-lg-4">
            <p className="facility_name">High speed wifi</p>
            <p className="facility_description">
              High-Speed Wifi, HDTVs everything you need to do your best work.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="facility_name">Comfy workstation</p>
            <p className="facility_description">
              Connect with other people and share your skills for better and
              quick growth.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="facility_name">Meeting rooms</p>
            <p className="facility_description">
              Come up with great ideas and engage in valuable discussions in
              meeting rooms.
            </p>
          </div>
        </div>
        <div className="row facility_box">
          <div className="col-lg-4">
            <p className="facility_name">Printer</p>
            <p className="facility_description">
              Printing and scanning facilities available without any extra cost.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="facility_name">Pantry</p>
            <p className="facility_description">
              Lounge, kitchen, breakout rooms, and more. mix of both work tables
              and lounge seating.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="facility_name">Parking</p>
            <p className="facility_description">
              Avoid morning hassle with easy and convenient parking area
              availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
