import React, { useState } from "react";
import contactBanner from "../media/contact-banner.png";
import contactImg from "../media/contact-img.png";
import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Select from "react-select";

function Contact() {
  const seatOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ];
  const deskTypeOptions = [
    { value: "Hot Desk", label: "Hot Desk" },
    { value: "Dedicated Desk", label: "Dedicated Desk" },
    { value: "Private Cabin", label: "Private Cabin" },
    { value: "Virtual Office", label: "Virtual Office" },
  ];

  const [selectedSeatOption, setSeatOption] = useState(null);

  const [selectedDeskOption, setDeskOption] = useState(null);

  return (
    <>
      <section
        id="contact_banner_area"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner_text text-center white_text">
                <h3>Get In Touch</h3>
                <p>
                  Drop us a line or visit us for a cup of tea!
                  <br />
                  We glad to see our friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact_info_sec">
        <div className="container">
          <div className="row info_row">
            <div className="col-md-7 col-12">
              <div className="form_col">
                <h3>Send your request</h3>
                <div className="contact_page_form">
                  <form
                    method="post"
                    action="mail-handler/contact-mail-handler.php"
                  >
                    <div className="row">
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="E-Mail Id"
                          required
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone No."
                          required
                        />
                      </div>
                      <div className="col-6 mb-2">
                        <Select
                          defaultValue={selectedDeskOption}
                          onChange={setDeskOption}
                          options={deskTypeOptions}
                          placeholder="Desk Type"
                        />
                      </div>
                      <div className="col-6 mb-2">
                        <Select
                          defaultValue={selectedSeatOption}
                          onChange={setSeatOption}
                          options={seatOptions}
                          placeholder="No. Of Seats"
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Your Query"
                        ></textarea>
                      </div>
                      <div className="col-12 form_btn text-center">
                        <button type="submit" className="globalBtn contactBtn">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="contact_img">
                    <img src={contactImg} alt="contact" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="contact_info">
                    <h3>Contact Information</h3>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="contact_icon_box">
                        <div className="call_icon">
                          <IoMdCall />
                        </div>
                        <div>
                          <h5>Phone</h5>
                          <p>
                            <a href="tel:+919999108078">+91 9999 10 8078</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="contact_icon_box">
                        <div className="call_icon">
                          <AiOutlineMail />
                        </div>
                        <div className="email_box_contact">
                          <h5>Email</h5>
                          <p>
                            <a href="mailto:thespacite@gmail.com">
                              thespacite@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
