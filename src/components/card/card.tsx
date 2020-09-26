import React, { useRef, useState } from "react";
import "./card.css";
import Author from "../quote/author";
import Quote from "../quote/quote";

const Card = ({ quote }) => {
  const quoteClass = { className: "quoteCard " };
  const authorClass = {
    className: "authorCard",
  };

  const [front, setFront] = useState(true);

  const onMouseEnter = () => {
    setFront(false);
  };
  const onMouseLeave = () => {
    setFront(true);
  };
  const cardFrontClass = { className: "card flip-in-ver-right" };
  const cardBackClass = { className: "card flip-out-ver-left" };
  return front ? (
    <div {...{ ...cardFrontClass, onMouseEnter }}>
      <div {...quoteClass}>
        <Quote quote={[quote, ""]} />
      </div>
    </div>
  ) : (
    <div {...{ ...cardBackClass, onMouseLeave }}>
      <div {...authorClass}>
        <Author {...{ quote }} />
      </div>
    </div>
  );
};

export default Card;
