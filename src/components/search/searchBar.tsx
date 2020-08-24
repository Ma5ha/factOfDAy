import React, { useState } from "react";

import arrayToString from "../../hellpers/arrayToString";
import {
  flexColumn,
  spaceAround,
  flexRow,
  flexCenter,
  justifayCenter,
} from "../../styles/style.var";
import inputFactory from "../../hellpers/inputFactory";
import styleToggle from "../../hellpers/styleToggle";
import Author from "../quote/author";
import Quote from "../quote/quote";
import Votes from "../quote/votes";
import { Quote as Quot } from "../quote/quoteTypes";
import "./shearchBar.css";

import themeStyle from "../../hellpers/theme";
import hart from "../../assets/heart.svg";
import like from "../../assets/like.svg";

import dislike from "../../assets/dislike.svg";
import { api } from "../../enviroment/api";

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
