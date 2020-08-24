import React, { useState } from "react";
import Quote from "../quote/quote";
import Author from "../quote/author";
import arrayToString from "../../hellpers/arrayToString";
import { flexRow, justifayCenter } from "../../styles/style.var";
import Votes from "../quote/votes";

import themeStyle from "../../hellpers/theme";
import { Quote as Quot } from "../quote/quoteTypes";
import hart from "../../assets/heart.svg";
import like from "../../assets/like.svg";

import dislike from "../../assets/dislike.svg";
import { api } from "../../enviroment/api";

const SearchResult = ({ data: { result, filter, vote } }) => {
  const [style, setStyle] = useState<string>();
  const clckedStyled = "jello-horizontal";

  const addStyle = (match: string) => {
    if (style === match) {
      return `quoteAction ${clckedStyled}`;
    }

    return "quoteAction";
  };
  return result
    ? result.quotes.map((res: Quot) => (
        <div key={res.id} className="fade-in-bottom quote">
          <div className="main autoMargin">
            <Quote quote={[res, filter]} />
            <Author quote={res} />
          </div>
          <div className="lefIcons">
            <div className={arrayToString([flexRow, justifayCenter])}></div>
            <Votes votes={`${res.downvotes_count}`}>
              <div className="flexColumn columnReverse autoMargin">
                Downvotes
                <img
                  onClick={() => {
                    vote(api.downvote(res.id));
                    setStyle(res.id + "donwnvotes");
                  }}
                  className={`${addStyle(res.id + "donwnvotes")} ${themeStyle([
                    "IconShadow",
                  ])}`}
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
                    className={`${addStyle(res.id + "upvotes")} ${themeStyle([
                      "IconShadow",
                    ])}`}
                    src={like}
                    alt="like"
                  />
                </div>
              </Votes>
            </div>
          </div>
          <div className="rightIcons">
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
          <div></div>
          <div>
            <hr className={themeStyle(["Line"]).join(" ")} />
          </div>
        </div>
      ))
    : null;
};

export default SearchResult;
