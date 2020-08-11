import React, { useState, useEffect } from "react";
import useInputHook from "../../customHooks/inputHook";

import axios from "axios";
import { api } from "../../enviroment/api";
import { Heeaders } from "../../actions/Headers";
import Quote from "../quote/quote";
import Author from "../quote/author";
import {
  textCenter,
  flexRow,
  spaceAround,
  flexColumn,
  autoMargin,
  flexCenter,
  spaceBetween,
  justifayCenter,
} from "../../styles/style.var";
import arrayToString from "../../hellpers/arrayToString";
import { Quote as Quot } from "../quote/quoteTypes";
import "./shearchBar.css";
import styleToggle from "../../hellpers/styleToggle";
import inputFactory from "../../hellpers/inputFactory";
import getRequest from "../../actions/getReequest";
import Votes from "../quote/votes";

const SearchBar = () => {
  const [page, setPage] = useState<any>(0);
  const [result, setResult] = useState<any>(undefined);
  const [searchTerm, search] = useInputHook("", "search", "Search quote");

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest(api.quotes(), setResult, { headers: { ...Heeaders } });
  };

  return (
    <div className={arrayToString([flexColumn, spaceAround])}>
      <div
        className={arrayToString([
          flexRow,
          spaceAround,
          flexCenter,
          "fullHegiht",
        ])}
      >
        <form onSubmit={handleSubmit}>
          <input
            {...inputFactory(
              styleToggle("bigSearchBar", "smallSearchBar", result),
              search
            )}
          ></input>
        </form>
      </div>

      {result
        ? result.quotes.map((res: Quot) => (
            <div key={res.id} className="fade-in-bottom">
              <Author quote={res} />
              <Quote quote={res} />
              <div className={arrayToString([flexRow, justifayCenter])}>
                <Votes votes={res.downvotes_count}>Downvotes</Votes>
                <div style={{ margin: "0 10px 0 10px" }}>
                  <Votes votes={res.upvotes_count}>Upvotes</Votes>
                </div>

                <Votes votes={res.favorites_count}>Favorite</Votes>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchBar;
