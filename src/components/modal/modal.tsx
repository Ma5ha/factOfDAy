import React from "react";
import themeStyle from "../../hellpers/theme";

import "./modal.css";
import { loggedIn } from "../../hellpers/isLogged";

const Modal = ({ handlleClick }) => {
  const modal = `${themeStyle(["Modal"]).join("")} modal`;

  const close = (e) => {
    if (e.target.className === "modalWarper") {
      handlleClick();
    }
  };
  const handlleKeyDown = (e) => {
    if (e.key === "Escape") {
      handlleClick();
    }
  };

  const handleSubmit = (e) => {
    if (!loggedIn) {
      alert("niggaaaaaaaaaa");
    }
    e.preventDefault();
  };
  return (
    <div
      onClick={close}
      onKeyDown={handlleKeyDown}
      className="modalWarper"
      tabIndex={-1}
    >
      <div
        //    onBlur={handlleClick}

        tabIndex={1}
        className={modal}
      >
        <form onSubmit={handleSubmit}>
          <label>Author :</label>
          <input type="text" placeholder="Author name" />
          <label>Quote</label>
          <textarea placeholder="enter quote..."></textarea>
          <button>Subimit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
