import React, { useContext, useState } from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./NearCoworking.css";
import { CityContext } from "../../context/CityContext";
import { Link } from "react-router-dom";
import ContactFormModal from "../../modal-form/ContactFormModal";
import Modal from "react-modal";

function NearCoworking() {
  const { breakPoints, Myarrow } = useContext(CityContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="mob_section">
      <div className="container p_60">
        <h2>
          Popular Coworking Near <span className="top_city_span">You</span>
        </h2>
        <div className="top_space_row near_coworking">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <p>Sector 48, Gurgaon</p>
                </div>
                <div className="card_amenities">
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361871283.png"
                      alt="wifi"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688626817843.png"
                      alt="dedicated desk"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361881320.png"
                      alt="meeting rooms"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361932524.png"
                      alt="printer"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361894820.png"
                      alt="pantry"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361905753.png"
                      alt="parking"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <p className="price_from">Starting</p>
                <div className="price_box">
                  <p className="price">
                    ₹ 9,000 /*<span>Month</span>
                  </p>
                </div>
              </div>
              <div className="card_button_link">
                <div onClick={openModal}>Enquire Now</div>
                <div>
                  <Link
                  // to={`/coworking/${workspace?.slug}`}
                  // target="_blank"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default NearCoworking;
