import React, { useEffect, useState, Children, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import Quote from "../components/quote/quote";
import Author from "../components/quote/author";
import Carousel from "../components/carousel/carousel";

const AuthorPage = () => {
  const { name } = useParams();
  const config = {
    headers: { ...Heeaders },
    params: { filter: name, type: "author" },
  };

  const [authorQuotes, setAuthorQuotes] = useState<any[]>();

  const auhtorCallback = (arg) => {
    console.log(arg);
    setAuthorQuotes(arg.quotes);
  };

  useEffect(() => {
    getRequest(api.quotes(), auhtorCallback, { ...config });
  }, []);

  return authorQuotes ? (
    <div className="flexRow flexCenter autoMargin">
      <Carousel>
        {authorQuotes.map((quote) => (
          <div key={quote.id}>
            <Quote quote={[quote, ""]} />
            <Author quote={quote} />
          </div>
        ))}
      </Carousel>
    </div>
  ) : null;
};

export default AuthorPage;
