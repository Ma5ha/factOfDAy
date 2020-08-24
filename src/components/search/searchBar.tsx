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

const SearchBar = ({ handleSubmit, search, result, filter, vote }) => {
  const [style, setStyle] = useState<string>();
  const clckedStyled = "jello-horizontal";

  const addStyle = (match: string) => {
    if (style === match) {
      return `quoteAction ${clckedStyled}`;
    }

    return "quoteAction";
  };
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
                <Votes votes={`${res.downvotes_count}`}>
                  <div className="flexColumn columnReverse autoMargin">
                    Downvotes
                    <img
                      onClick={() => {
                        vote(api.downvote(res.id));
                        setStyle(res.id + "donwnvotes");
                      }}
                      className={`${addStyle(
                        res.id + "donwnvotes"
                      )} ${themeStyle(["IconShadow"])}`}
                      src={dislike}
                      alt="unlike"
                    />
                  </div>
                </Votes>
                <div style={{ margin: "0 10px 0 10px" }}>
                  <Votes votes={res.upvotes_count}>
                    <div className="flexColumn columnReverse autoMargin">
                      Upvotes
                      <img
                        onClick={() => {
                          vote(api.upvote(res.id));
                          setStyle(res.id + "upvotes");
                        }}
                        className={`${addStyle(
                          res.id + "upvotes"
                        )} ${themeStyle(["IconShadow"])}`}
                        src={like}
                        alt="like"
                      />
                    </div>
                  </Votes>
                </div>

                <Votes votes={res.favorites_count}>
                  <div className="flexColumn columnReverse autoMargin">
                    Favorites
                    <img
                      onClick={() => {
                        vote(api.favorite(res.id));
                        setStyle(res.id + "fav");
                      }}
                      className={`${addStyle(res.id + "fav")} ${themeStyle([
                        "IconShadow",
                      ])}`}
                      src={hart}
                      alt="favorite"
                    />
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
