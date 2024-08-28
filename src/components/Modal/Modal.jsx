import Modal from "react-modal";
import styles from "./Modal.module.css";

Modal.setAppElement("#root");

function ModalWrapper({ isOpen, setIsOpen, children }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      width: "95%",
      maxwidth: "575px",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      height: "fit-content",
      maxHeight: "90vh",
      background: "rgba(239, 239, 239, 0.85)",
      border: "0",
      borderRadius: "15px",
      padding: "2rem",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}

export default ModalWrapper;
