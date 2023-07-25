import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq_main">
      <div className="container">
        <h3 className="sub_heading_faq">
          <span>You've</span> Got Questions?
        </h3>
        <div className="section_heading_faq">
          <h2>We've got Answers!</h2>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is a coworking space?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A coworking space is a shared workspace where individuals,
                freelancers, entrepreneurs, and small teams can work
                independently or collaboratively. These spaces are equipped with
                amenities like desks, chairs, high-speed internet, meeting
                rooms, and often offer a range of services to support
                professional growth.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What are the benefits of using a coworking space?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Coworking spaces offer numerous benefits, including
                cost-effectiveness, networking opportunities, a professional
                environment, flexible memberships, access to amenities, and a
                sense of community among like-minded professionals.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I use a coworking space address as my business address?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Many coworking spaces provide virtual office services, which may
                include using their address as your business address for mail
                handling and professional appearances. However, policies vary,
                so it's essential to confirm with the coworking space provider.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                What is the difference between coworking spaces and traditional
                office spaces?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Coworking spaces are more flexible and provide a collaborative
                and community-oriented environment, whereas traditional office
                spaces typically involve long-term leases and a more structured
                corporate setting.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Do coworking spaces offer internet security and privacy?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Reputable coworking spaces take internet security seriously and
                usually provide secure Wi-Fi networks with password protection.
                Additionally, they may offer private meeting rooms for sensitive
                discussions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Can I host events or workshops in a coworking space?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, many coworking spaces offer event hosting facilities. They
                often have event spaces or meeting rooms available for booking,
                making it convenient to conduct workshops, seminars, or
                networking events.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
