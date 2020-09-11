import React from "react";
import themeStyle from "../../hellpers/theme";
import "./modal.css";
const ModalButton = ({ clickHandler }) => {
  const modalButton = `${themeStyle(["ModalButton"]).join(" ")} modalButton`;

  return (
    <button onClick={clickHandler} className={modalButton}>
      add Quote
    </button>
  );
};

export default ModalButton;
