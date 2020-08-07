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
    <div className={arrayToString([flexCenter, flexColumn])}>
      <h1 className={textCenter}>Quote of Day</h1>
      <p className={textCenter}>
        <i>&#8220;{body}&rdquo;</i>
      </p>
    </div>
  );
};

export default Quote;
