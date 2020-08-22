import React from "react";

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
                <Votes votes={res.downvotes_count}>
                  <div className="flexColumn columnReverse autoMargin">
                    Downvotes
                    <img className="quoteAction" src={dislike} alt="unlike" />
                  </div>
                </Votes>
                <div style={{ margin: "0 10px 0 10px" }}>
                  <Votes votes={res.upvotes_count}>
                    <div className="flexColumn columnReverse autoMargin">
                      Upvotes
                      <img className="quoteAction" src={like} alt="like" />
                    </div>
                  </Votes>
                </div>

                <Votes votes={res.favorites_count}>
                  <div className="flexColumn columnReverse autoMargin">
                    Favorites
                    <img className="quoteAction" src={hart} alt="favorite" />
                  </div>
                </Votes>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchBar;
