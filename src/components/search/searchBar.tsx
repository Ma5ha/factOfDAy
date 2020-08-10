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
const SearchBar = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, searchBar] = useInputHook("", "search");
  const [result, setResult] = useState<any>();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getQuotes() {
      const result = await axios.get<Quot[]>(api.quotes(), {
        params: { page, filter },

        headers: { ...Heeaders },
      });

      setResult(result.data);
    }

    getQuotes();
  }, [filter, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(searchTerm);
    setPage(1);
  };

  return (
    <div className={arrayToString([flexColumn, spaceAround])}>
      <div className={arrayToString([flexRow, spaceAround])}>
        <form onSubmit={handleSubmit}>
          <label>Search Bar</label>
          <input
            {...searchBar}
            style={{ opacity: 1, width: "100px", height: "10px" }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      <button onClick={() => setPage(page + 1)}>click me</button>

      {result ? (
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
      )}
    </div>
  );
};

export default SearchBar;

const Votes = ({ votes, children }) => {
  return (
    <h6 className={textCenter}>
      {children} {votes}
    </h6>
  );
};
