import React, {
  useState,
  useEffect,
  useDebugValue,
  useMemo,
  useLayoutEffect,
} from "react";
import axios from "axios";
import { api } from "../../enviroment/api";
import getRequest from "../../actions/getReequest";
import { quote } from "./quoteTypes";
import Quote from "./quote";
import {
  flexRow,
  flexCenter,
  flexColumn,
  autoMargin,
} from "../../styles/style.var";
import "../../styles/global.css";
import "./quoteStyle.css";
import arrayToString from "../../hellpers/arrayToString";
import Author from "./author";
import { Heeaders } from "../../actions/Headers";

const QuoteController = () => {
  const [quoteState, setQuote] = useState<quote>();

  useLayoutEffect(() => {
    getRequest<quote>(
      api.base + api.qotd,

      setQuote
    );
  }, []);

  useEffect(() => {
    async function d() {
      const result = await axios.get(
        "https://favqs.com/api/quotes/?filter=Mark+Twain&type=author",
        { headers: { ...Heeaders } }
      );
      console.log(result.data, "this");
    }
    d();
  }, []);

  if (quoteState)
    return (
      <div
        className={arrayToString([
          flexColumn,
          flexCenter,
          "fullSolidBorder",
          autoMargin,
          "quoteBox",
        ])}
      >
        <Quote quote={quoteState.quote} />
        <Author quote={quoteState.quote} />
      </div>
    );
  return <h1>Loading...</h1>;
};

export default QuoteController;
