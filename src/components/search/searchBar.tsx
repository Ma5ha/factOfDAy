import React, { useState } from "react";

import arrayToString from "../../hellpers/arrayToString";
import {
  flexColumn,
  spaceAround,
  flexRow,
  flexCenter,
} from "../../styles/style.var";
import inputFactory from "../../hellpers/inputFactory";
import styleToggle from "../../hellpers/styleToggle";

import "./shearchBar.css";

import themeStyle from "../../hellpers/theme";

const SearchBar = ({ handleSubmit, search, result }) => {
  return (
    <div className={arrayToString([flexColumn, spaceAround])}>
      <div
        className={arrayToString([
          flexRow,
          spaceAround,
          flexCenter,
          "fullHegiht",
        ])}
      >
        <form onSubmit={handleSubmit}>
          <input
            {...inputFactory(
              [
                arrayToString([
                  ...themeStyle(["Input"]),
                  styleToggle("bigSearchBar", "smallSearchBar", result),
                ]),
              ],

              search
            )}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
