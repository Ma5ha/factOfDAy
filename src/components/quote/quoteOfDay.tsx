import React, { useEffect, useState } from "react";
import getRequest from "../../actions/getReequest";
import { api } from "../../enviroment/api";
import Author from "./author";
import Quote from "./quote";
import "./quoteStyle.css";
import { Quote as quote } from "./quoteTypes";
const QOfDay = () => {
  const [quote, setQuote] = useState<quote>();

  useEffect(() => {
    getRequest<quote>(api.base + api.qotd, quoteCallback);
  }, []);

  const quoteCallback = (arg) => {
    const { quote } = arg;
    setQuote(quote);
  };

  return quote ? (
    <div className="quoteOfDay">
      <h1> Quote of Day</h1>
      <Quote quote={[quote, ""]} />
      <Author {...{ quote }} />
    </div>
  ) : null;
};

export default QOfDay;
