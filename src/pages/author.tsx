import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import Quote from "../components/quote/quote";
import Author from "../components/quote/author";

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

const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index <= children.length - 2) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };

  const previous = () => {
    if (index === 0) {
      setIndex(children.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="carousel">
      {children[index]}
      <button onClick={next}>next</button>
      <button onClick={previous}>prev</button>
    </div>
  );
};
