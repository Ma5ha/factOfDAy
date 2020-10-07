import React, { useState } from "react";
import Quote from "../quote/quote";
import Author from "../quote/author";
import arrayToString from "../../hellpers/arrayToString";
import { flexRow, justifayCenter } from "../../styles/style.var";
import Votes from "../quote/votes";

import themeStyle from "../../hellpers/theme";

import { api } from "../../enviroment/api";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchResult = ({ data: { result, filter, vote } }) => {
  const [style, setStyle] = useState<string>();
  const clckedStyled = "jello-horizontal";

  const addStyle = (match: string) => {
    if (style === match) {
      return `quoteAction ${clckedStyled}`;
    }

    return "quoteAction";
  };

  const animation = (index) => {
    return {
      style: {
        animation: `fade-in-bottom 2s cubic-bezier(0.39, 0.575, 0.565, 1) ${index}s both`,
      },
    };
  };

  return result
    ? result.quotes.map((res, index) => (
        <div key={res.id} className=" quote" {...animation(index * 0.3)}>
          <div className="main autoMargin">
            <Quote quote={[res, filter]} />
            <Author quote={res} />
          </div>
          <div className="lefIcons">
            <div className={arrayToString([flexRow, justifayCenter])}></div>
            <Votes votes={`${res.downvotes_count}`}>
              <div className="flexColumn columnReverse autoMargin shearchIcon">
                Downvotes
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  onClick={() => {
                    vote(api.downvote(res.id));
                    setStyle(res.id + "donwnvotes");
                  }}
                  className={`${addStyle(res.id + "donwnvotes")} ${themeStyle([
                    "IconShadow",
                  ])}`}
                  size="2x"
                />
              </div>
            </Votes>
            <div style={{ margin: "0 10px 0 10px" }}>
              <Votes votes={res.upvotes_count}>
                <div className="flexColumn columnReverse autoMargin shearchIcon">
                  Upvotes
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    onClick={() => {
                      vote(api.upvote(res.id));
                      setStyle(res.id + "upvotes");
                    }}
                    className={`${addStyle(res.id + "upvotes")} ${themeStyle([
                      "IconShadow",
                    ])}`}
                    size="2x"
                  />
                </div>
              </Votes>
            </div>
          </div>
          <div className="rightIcons">
            <Votes votes={res.favorites_count}>
              <div className="flexColumn columnReverse autoMargin shearchIcon">
                Favorites
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => {
                    vote(api.favorite(res.id));
                    setStyle(res.id + "fav");
                  }}
                  className={`${addStyle(res.id + "fav")} ${themeStyle([
                    "IconShadow",
                  ])}`}
                  size="2x"
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
