import { quote } from "./quoteTypes";
import React from "react";
import {
  textCenter,
  flexCenter,
  flexRow,
  flexColumn,
} from "../../styles/style.var";
import arrayToString from "../../hellpers/arrayToString";

const Quote = ({ quote: { body } }) => {
  return (
    <p className={textCenter}>
      <i>&#8220;{body}&rdquo;</i>
    </p>
  );
};

export default Quote;
