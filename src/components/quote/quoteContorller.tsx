import React, { useState, useLayoutEffect } from "react";

import { api } from "../../enviroment/api";
import getRequest from "../../actions/getReequest";
import { quote } from "./quoteTypes";
import Quote from "./quote";
import {
  flexCenter,
  flexColumn,
  autoMargin,
  textCenter,
} from "../../styles/style.var";
import "../../styles/global.css";
import "./quoteStyle.css";
import arrayToString from "../../hellpers/arrayToString";
import Author from "./author";

import spiner from "../../assets/spiner.gif";
import { Link } from "react-router-dom";
import { join } from "path";
import themeStyle from "../../hellpers/theme";

const QuoteController = () => {
  const [quoteState, setQuote] = useState<quote>();

  useLayoutEffect(() => {
    getRequest<quote>(
      api.base + api.qotd,

      setQuote
    );
  }, []);

  const getQuoteRandom = () => {
    getRequest<quote>(
      api.base + api.qotd,

      setQuote
    );
  };

  if (quoteState)
    return (
      <div>
        <div className="warperBox">
          <div
            className={arrayToString([
              flexColumn,
              flexCenter,
              autoMargin,
              "quoteBox",
            ])}
          >
            <div className="click" onClick={getQuoteRandom}>
              <Quote quote={[quoteState.quote, ""]} />
            </div>
          </div>

          <div className={"line " + themeStyle(["LineColor"])}>
            <div>
              <Link
                className="none click authorLink"
                to={`author/${quoteState.quote.author}`}
              >
                <Author quote={quoteState.quote} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div
      className={arrayToString([
        flexColumn,
        flexCenter,
        autoMargin,
        "fullPage",
      ])}
    >
      <img className="autoMargin" src={spiner} alt="ssasa" width="50px" />;
    </div>
  );
};

export default QuoteController;
