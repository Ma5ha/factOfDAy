import React, { useEffect, useState } from "react";
import getRequest from "../actions/getReequest";
import { Heeaders } from "../actions/Headers";
import Card from "../components/card/card";
// import QuoteController from "../components/quote/quoteContorller";
import { api } from "../enviroment/api";

const HomePage = () => {
  // const config =  };
  const className = "homeQuotes";
  const [quotes, setQuotes] = useState<any>();
  const quotesCallback = (arg) => {
    const { quotes } = arg;
    setQuotes(quotes);
  };
  useEffect(() => {
    getRequest(api.quotes(), quotesCallback, { headers: { ...Heeaders } });
  }, []);

  return quotes ? (
    <div {...{ className }}>
      {quotes.map((quote) => (
        <Card {...{ quote }} />
      ))}
    </div>
  ) : null;
};

export default HomePage;
