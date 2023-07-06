import React from "react";
import "./Facility.css";

function Facility() {
  return (
    <div className="facility_main">
      <div className="container">
        <h2>
          Best Spaces . Best <span className="top_city_span">Amenities</span>
        </h2>
        <div className="row facility_box">
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361871283.png"
              alt="wifi"
            />
            <p className="facility_name">High speed wifi</p>
            <p className="facility_description">
              High-Speed Wifi, HDTVs everything you need to do your best work.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361858729.png"
              alt="wifi"
            />
            <p className="facility_name">Comfy workstation</p>
            <p className="facility_description">
              Connect with other people and share your skills for better and
              quick growth.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361881320.png"
              alt="wifi"
            />
            <p className="facility_name">Meeting rooms</p>
            <p className="facility_description">
              Come up with great ideas and engage in valuable discussions in
              meeting rooms.
            </p>
          </div>
        </div>
        <div className="row facility_box">
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361932524.png"
              alt="wifi"
            />
            <p className="facility_name">Printer</p>
            <p className="facility_description">
              Printing and scanning facilities available without any extra cost.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361894820.png"
              alt="wifi"
            />
            <p className="facility_name">Pantry</p>
            <p className="facility_description">
              Lounge, kitchen, breakout rooms, and more. mix of both work tables
              and lounge seating.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361905753.png"
              alt="wifi"
            />
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
