import React, { useState } from "react";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

function PopupBtn({ location }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <NavLink className="nav-link" onClick={openModal}>
        Virtual Office
      </NavLink>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ContactFormModal closeModal={closeModal} location={location} />
      </Modal>
    </>
  );
}

export default PopupBtn;
