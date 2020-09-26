import React from "react";
import "./card.css";
import Author from "../quote/author";
import Quote from "../quote/quote";

const Card = ({ quote }) => {
  const quoteClass = { className: "quoteCar" };
  const authorClass = {
    className: "author",
  };

  const cardClass = { className: "card" };
  return (
    <div {...cardClass}>
      <div {...quoteClass}>
        <Quote quote={[quote, ""]} />
      </div>
      <div {...authorClass}></div>
      <Author {...{ quote }} />
    </div>
  );
};

export default Card;
