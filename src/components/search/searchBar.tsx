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
import styler from "../../hellpers/styler";
import themeStyle from "../../hellpers/theme";

const SearchBar = ({ handleSubmit, search, result, filter }) => {
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

      {result
        ? result.quotes.map((res: Quot) => (
            <div key={res.id} className="fade-in-bottom">
              <Author quote={res} />
              <Quote quote={[res, filter]} />
              <div className={arrayToString([flexRow, justifayCenter])}>
                <Votes votes={res.downvotes_count}>Downvotes</Votes>
                <div style={{ margin: "0 10px 0 10px" }}>
                  <Votes votes={res.upvotes_count}>Upvotes</Votes>
                </div>

                <Votes votes={res.favorites_count}>Favorite</Votes>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchBar;
