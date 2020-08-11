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
} from "../../styles/style.var";
import arrayToString from "../../hellpers/arrayToString";
import { Quote as Quot } from "../quote/quoteTypes";
import "./shearchBar.css";
import styleToggle from "../../hellpers/styleToggle";
import inputFactory from "../../hellpers/inputFactory";

const SearchBar = () => {
  const [page, setPage] = useState<any>();
  const [searchTerm, search] = useInputHook("Search", "search");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("mashsahsah");
    console.log("sasa");
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
              styleToggle("bigSearchBar", "smallSearchBar", page),
              search
            )}
          ></input>
        </form>
      </div>

      {/* {result ? (
        result.quotes.map((res: Quot) => (
          <div key={res.id}>
            <Quote quote={res} /> <Author quote={res} />
            <div className={arrayToString([flexRow])}>
              <Votes votes={res.downvotes_count}>Downvotes</Votes>
              <Votes votes={res.upvotes_count}>Upvotes</Votes>
              <Votes votes={res.favorites_count}>Favorite</Votes>
            </div>
          </div>
        ))
      ) : (
        <p> nome</p>
      )} */}
    </div>
  );
};

export default SearchBar;
