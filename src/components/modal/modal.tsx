import React, { useEffect } from "react";
import themeStyle from "../../hellpers/theme";
import { useHistory, Redirect } from "react-router-dom";
import "./modal.css";
import { loggedIn } from "../../hellpers/isLogged";
import useRedirect from "../../hellpers/useRedirect";

const Modal = ({ handlleClick }) => {
  const history = useHistory();

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
    e.preventDefault();

    history.push("search");
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
