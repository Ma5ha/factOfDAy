import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import Carousel from "../components/carousel/carousel";
import Quote from "../components/quote/quote";
import Author from "../components/quote/author";
const TagPage = () => {
  const { tag } = useParams();
  const [tagQuotes, setTagQuotes] = useState<any>();

  const config = {
    headers: { ...Heeaders },
    params: { filter: tag, type: "tag" },
  };
  const tagCallback = (arg) => {
    setTagQuotes(arg.quotes);
  };

  useEffect(() => {
    getRequest(api.quotes(), tagCallback, config);
  }, []);
  return tagQuotes ? (
    <div className="flexRow flexCenter autoMargin">
      <Carousel>
        {tagQuotes.map((quote) => (
          <div key={quote.id}>
            <Quote quote={[quote, ""]} />
            <Author quote={quote} />
          </div>
        ))}
      </Carousel>
    </div>
  ) : null;
};

export default TagPage;
