import { faFeather, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import themeStyle from "../../hellpers/theme";
import "./modal.css";
const ModalButton = ({ clickHandler }) => {
  const modalButton = `${themeStyle(["ModalButton"]).join(" ")} modalButton`;

  return (
    <button onClick={clickHandler} className={modalButton}>
      {/* <i className="fas fa-feather"></i> */}
      {/* <div className="cross">
        <span className="vertical"></span>
        <span className="horizontal"></span>
       
      </div> */}
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faFeather} size="2x" />
    </button>
  );
};

export default ModalButton;
