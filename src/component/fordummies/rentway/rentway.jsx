import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./rentway.css";
import Star1 from '../../../img/fordummeis_img/star1.png'
import Star3 from '../../../img/fordummeis_img/star3.png'
import Mos from '../../../img/fordummeis_img/mos.png'
import Seven from '../../../img/fordummeis_img/711.png'
import Kfc from '../../../img/fordummeis_img/肯德基.png'
import Mc from '../../../img/fordummeis_img/Mc.png'

function Rentway() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleModal = (content) => {
    setModalContent(content);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Rentway">
      <div className="boxbox">
        <button
          type="button"
          onClick={() => toggleModal("modal1")}
          className="brand-btn bg1"
        >
          <h1 className="iji">7-11</h1>
        </button>

        <button
          type="button"
          onClick={() => toggleModal("modal2")}
          className="brand-btn bg2"
        >
          <h1 className="iji">肯德基</h1>
        </button>

        <button
          type="button"
          onClick={() => toggleModal("modal3")}
          className="brand-btn bg3"
        >
          <h1 className="iji">麥當勞</h1>
        </button>

        <button
          type="button"
          onClick={() => toggleModal("modal4")}
          className="brand-btn bg4"
        >
          <h1 className="iji">摩斯漢堡</h1>
        </button>

        <button
          type="button"
          onClick={() => toggleModal("modal5")}
          className="brand-btn bg5"
        >
          <h1 className="iji">星巴克</h1>
        </button>
      </div>

      {showModal && (
        <Modal closeModal={closeModal}>
          {modalContent === "modal1" && (
            <ModalContent1 closeModal={closeModal} />
          )}
          {modalContent === "modal2" && (
            <ModalContent2 closeModal={closeModal} />
          )}
          {modalContent === "modal3" && (
            <ModalContent3 closeModal={closeModal} />
          )}
          {modalContent === "modal4" && (
            <ModalContent4 closeModal={closeModal} />
          )}
          {modalContent === "modal5" && (
            <ModalContent5 closeModal={closeModal} />
          )}
        </Modal>
      )}
    </div>
  );
}

function Modal({ closeModal, children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.body
      )}
      {ReactDOM.createPortal(
        <Overlay closeModal={closeModal}>{children}</Overlay>,
        document.body
      )}
    </>
  );
}

function Backdrop({ closeModal }) {
  return <div className="backdrop" onClick={closeModal}></div>;
}

function Overlay({ closeModal, children }) {
  return (
    <div className="overlay">
      <header className="overlay__header">
        <h3 className="foff-title">品牌懶人包</h3>
      </header>

      <div className="overlay__content">{children}</div>

      <footer className="overlay__footer">
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </footer>
    </div>
  );
}

function ModalContent1({ closeModal }) {
  return (
    <>
    <h1>統一超商 7-ELEVEN</h1>
      <img src={Seven} alt="" />
    </>
  );
}

function ModalContent2({ closeModal }) {
  return (
    <>
    <h1>肯德基</h1>
      <img src={Kfc} alt="" />        
    </>
  );
}

function ModalContent3({ closeModal }) {
  return (
    <>
    <h1>肯德基</h1>
      <img src={Mc } alt="" />        
    </>
  );
}

function ModalContent4({ closeModal }) {
    return (
      <>
      <h1>摩斯漢堡</h1>
        <img src={Mos} alt="" />        
      </>
    );
  }

  function ModalContent5({ closeModal }) {
    return (
      <>
      <h1>星巴克</h1>
        <img src={Star3} alt="" />        
      </>
    );
  }


export default Rentway;
