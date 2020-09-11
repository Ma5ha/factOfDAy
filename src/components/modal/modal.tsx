import React, { useState, createContext } from "react";
import themeStyle from "../../hellpers/theme";

import "./modal.css";

const Modal = ({ handlleClick }) => {
  const modal = `${themeStyle(["Modal"]).join("")} modal`;

  return (
    <div onClick={handlleClick} className="modalWarper">
      <div className={modal}>mashasha</div>
    </div>
  );
};

export default Modal;
