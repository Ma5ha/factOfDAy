import { quote } from "./quoteTypes";
import React from "react";
import {
  textCenter,
  flexCenter,
  flexRow,
  flexColumn,
} from "../../styles/style.var";
import arrayToString from "../../hellpers/arrayToString";
import highlight from "../../hellpers/highlight";

const Quote = ({ quote: [str, filter] }) => {
  const { body } = str;
  return (
    <p className={textCenter}>
      <i>&#8220;{highlight(body, filter)}&rdquo;</i>
    </p>
  );
};

export default Quote;
