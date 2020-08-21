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

const QuoteController = () => {
  const [quoteState, setQuote] = useState<quote>();

  useLayoutEffect(() => {
    getRequest<quote>(
      api.base + api.qotd,

      setQuote
    );
  }, []);

  if (quoteState)
    return (
      <div
        className={arrayToString([
          flexColumn,
          flexCenter,
          "fullSolidBorder",
          autoMargin,
          "quoteBox",
        ])}
      >
        <div className={arrayToString([flexCenter, flexColumn])}>
          <h1 className={textCenter}>Quote of Day</h1>
          <Quote quote={[quoteState.quote, ""]} />
          <Author quote={quoteState.quote} />
        </div>
      </div>
    );
  return <img className="autoMargin" src={spiner} alt="ssasa" width="50px" />;
};

export default QuoteController;
