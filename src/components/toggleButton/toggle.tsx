import React, { useState, useContext } from "react";

import themeToggler from "./hellpers/themeToggler";
import isChecked from "./hellpers/isChecked";
import arrayToString from "../../hellpers/arrayToString";
import "./toggle.css";
import { autoMargin, flexRow } from "../../styles/style.var";

import "../../styles/global.css";

const ToggleButton = ({ data }) => {
  const toggle = (): void => {
    themeToggler();
    data(isChecked());
  };

  return (
    <div className={flexRow}>
      <label className={arrayToString([autoMargin, "round "])}>
        <input
          type="checkbox"
          onClick={toggle}
          checked={isChecked()}
          onChange={isChecked}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
