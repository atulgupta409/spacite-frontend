import React, { useState } from "react";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";

function RequestCallBtn() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className="globalBtn callBack_btn_nav" onClick={openModal}>
        Request Call Back
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default RequestCallBtn;
