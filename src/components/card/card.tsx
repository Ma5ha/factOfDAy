import React, { useState } from "react";
import "./card.css";
import Author from "../quote/author";
import Quote from "../quote/quote";
import Votes from "../quote/votes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { useSignupRedirect } from "../../customHooks/useSignup";
const Card = ({ quote }) => {
  const quoteClass = { className: "quoteCard " };
  const authorClass = {
    className: "authorCard",
  };
  const a = () => {
    alert("ASdasdasr");
  };
  const onClick = useSignupRedirect(a);
  const { favorites_count, upvotes_count, downvotes_count } = quote;

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
        <div>
          <Votes votes={favorites_count}>
            <FontAwesomeIcon {...onClick} icon={faHeart} />
          </Votes>
          <Votes votes={upvotes_count}>
            <FontAwesomeIcon {...onClick} icon={faThumbsDown} />
          </Votes>
          <Votes votes={downvotes_count}>
            <FontAwesomeIcon {...onClick} icon={faThumbsUp} />
          </Votes>
        </div>
      </div>
    </div>
  );
};

export default Card;
