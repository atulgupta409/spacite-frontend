import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";

function Card({
  slug,
  spaceImage,
  spaceAlt,
  spaceName,
  microlocation,
  cityName,
  plans,
  cardClass,
  imgBoxClass,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const address = microlocation + ", " + cityName;
  return (
    <>
      <div className={cardClass}>
        <Link to={slug} target="_blank" style={{ padding: "0" }}>
          <div className={imgBoxClass}>
            <img src={spaceImage} alt={spaceAlt} className="img-fluid" />
          </div>
        </Link>
        <div className="card_body">
          <p className="card-title">
            {spaceName?.length > 22
              ? spaceName.substring(0, 20) + "..."
              : spaceName}
          </p>
          <div className="location_box">
            <p>
              {address?.length > 26
                ? address.substring(0, 26) + "..."
                : address}
            </p>
          </div>
          <div className="card_amenities">
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760889968.png"
                alt="wifi"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760820901.png"
                alt="dedicated desk"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760910065.png"
                alt="meeting rooms"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760932785.png"
                alt="printer"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760917850.png"
                alt="pantry"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760925417.png"
                alt="parking"
                className="img-fluid"
              />
            </div>
          </div>
          <p className="price_from">Starting</p>
          <div className="price_box">
            <p className="price">
              ₹ {plans} /*<span>month</span>
            </p>
          </div>
        </div>
        <div className="card_button_link">
          <div onClick={openModal}>Enquire Now</div>
          <div>
            <Link to={slug} target="_blank">
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ContactFormModal
          closeModal={closeModal}
          location={`spacite.com${slug}`}
        />
      </Modal>
    </>
  );
}

export default Card;
