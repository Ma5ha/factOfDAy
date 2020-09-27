import React, { useEffect, useState } from "react";
import getRequest from "../actions/getReequest";
import { Heeaders } from "../actions/Headers";
import Card from "../components/card/card";
import { Quote as quote } from "../components/quote/quoteTypes";
import QOfDay from "../components/quote/quoteOfDay";
// import QuoteController from "../components/quote/quoteContorller";
import { api } from "../enviroment/api";

const HomePage = () => {
  // const config =  };
  const quoteClass = { className: "homeQuotes" };
  const warpClass = { className: "warpHome" };
  const [firstQ, setFirstQ] = useState<any>();
  const [secondQ, setSecondQ] = useState<any>();
  const quotesCallback = (arg) => {
    const { quotes } = arg;
    setFirstQ(quotes.slice(0, 4));
    setSecondQ(quotes.slice(5, 9));
  };
  useEffect(() => {
    getRequest(api.quotes(), quotesCallback, { headers: { ...Heeaders } });
  }, []);

  const [quote, setQuote] = useState<quote>();

  useEffect(() => {
    getRequest<quote>(api.base + api.qotd, quoteCallback);
  }, []);

  const quoteCallback = (arg) => {
    const { quote } = arg;
    setQuote(quote);
  };
  return quote && firstQ ? (
    <div {...warpClass}>
      <div {...quoteClass}>
        {firstQ?.map((quote) => (
          <Card {...{ quote }} />
        ))}
      </div>

      <QOfDay {...{ quote }} />

      <div {...quoteClass}>
        {secondQ?.map((quote) => (
          <Card {...{ quote }} />
        ))}
      </div>
    </div>
  ) : null;
};

export default HomePage;
