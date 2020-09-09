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

  const get = () => {
    getRequest<quote>(
      api.base + api.qotd,

      setQuote
    );
  };

  if (quoteState)
    return (
      <div className={arrayToString([flexColumn, flexCenter, autoMargin])}>
        <div className={arrayToString([flexCenter, flexColumn])}>
          <h1 className={[textCenter, "quoteBox"].join(" ")}>Quote of Day</h1>
          <div className={"quotes " + themeStyle(["SeconBackground"])}>
            <div className="click" onClick={get}>
              <Quote
                style={"quoteStyle quoteGlow"}
                quote={[quoteState.quote, ""]}
              />
            </div>
            <Link
              className="none click autoMargin acronimFont"
              to={`author/${quoteState.quote.author}`}
            >
              <Author quote={quoteState.quote} />
            </Link>
          </div>
        </div>
      </div>
    );
  return <img className="autoMargin" src={spiner} alt="ssasa" width="50px" />;
};

export default QuoteController;
