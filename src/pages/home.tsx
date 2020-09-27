import React, { useEffect, useState } from "react";
import getRequest from "../actions/getReequest";
import { Heeaders } from "../actions/Headers";
import Card from "../components/card/card";
import QuoteController from "../components/quote/quoteContorller";
// import QuoteController from "../components/quote/quoteContorller";
import { api } from "../enviroment/api";

const HomePage = () => {
  // const config =  };
  const quoteClass = { className: "homeQuotes" };
  const warpClass = { className: "warpHome" };
  const [quotes, setQuotes] = useState<any>();
  const quotesCallback = (arg) => {
    const { quotes } = arg;
    setQuotes(quotes.slice(0, 5));
  };
  useEffect(() => {
    getRequest(api.quotes(), quotesCallback, { headers: { ...Heeaders } });
  }, []);

  return (
    <div {...warpClass}>
      {quotes ? (
        <div {...quoteClass}>
          {quotes.map((quote) => (
            <Card {...{ quote }} />
          ))}
        </div>
      ) : null}
      <QuoteController />
    </div>
  );
};

export default HomePage;
