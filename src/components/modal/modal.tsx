import React, { useState, createContext } from "react";
import themeStyle from "../../hellpers/theme";

import "./modal.css";

const Modal = () => {
  const modal = themeStyle(["Modal"]).join("");

  return <div className={modal}>mashasha</div>;
};

export default Modal;
