import React, { useEffect, useState } from "react";
import getRequest from "../../actions/getReequest";
import { api } from "../../enviroment/api";
import Author from "./author";
import Quote from "./quote";
import "./quoteStyle.css";
import { Quote as quote } from "./quoteTypes";
const QOfDay = ({ quote }) => {
  return (
    <div className="quoteOfDay">
      <h1> Quote of Day</h1>
      <Quote quote={[quote, ""]} />
      <Author {...{ quote }} />
    </div>
  );
};

export default QOfDay;
