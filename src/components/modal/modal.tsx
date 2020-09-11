import React from "react";
import themeStyle from "../../hellpers/theme";

import "./modal.css";

const Modal = ({ handlleClick }) => {
  const modal = `${themeStyle(["Modal"]).join("")} modal`;

  const close = (e) => {
    if (e.target.className === "modalWarper") {
      handlleClick();
    }
  };
  return (
    <div onClick={close} className="modalWarper" tabIndex={-1}>
      <div
        //    onBlur={handlleClick}

        tabIndex={1}
        className={modal}
      >
        <form>
          <label>Author :</label>
          <input type="text" placeholder="Author name" />
          <label>Quote</label>
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
};

export default Modal;
