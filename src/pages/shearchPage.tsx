import React, { useState } from "react";
import SearchBar from "../components/search/searchBar";
import useInputHook from "../customHooks/inputHook";
import { Heeaders } from "../actions/Headers";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import filterAuthor from "../hellpers/filterAuthor";

import arrayToString from "../hellpers/arrayToString";
import { flexRow, justifayCenter } from "../styles/style.var";
import putRequest from "../actions/putRequest";

import token from "../hellpers/isLogged";
import SearchResult from "../components/search/searchResult";
import Authors from "../components/search/authors";
import Tags from "../components/search/tags";
import WordsRain from "../components/wordsRain/wordsRain";

const SearchPage = () => {
  const [page, setPage] = useState<any>();
  const [result, setResult] = useState<any>(undefined);
  const [filter, search] = useInputHook("", "search", "Search quote");
  const [tags, setTags] = useState<any[]>();
  const [authors, setAuthors] = useState<any>();
  const [lastPage, setLastPage] = useState<unknown>();

  let Config = {
    headers: {
      ...Heeaders,
      "User-Token": token(),
    },
    params: { filter, page },
  };

  const vote = (url) => {
    putRequest(url, Config);
    getRequest(api.quotes(), quotesCallback, { ...Config });
  };

  const quotesCallback = (arg) => {
    if (arg) {
      setResult(arg);
      setPage(arg.page);
      setLastPage(arg.last_page);
    }

    return;
  };

  const nexPage = () => {
    if (lastPage === false) {
      const params = { filter, page: page + 1 };
      getRequest(api.quotes(), quotesCallback, { ...Config, params });

      return;
    }
    return;
  };

  const prevPage = () => {
    if (page === 1) return;
    const params = { filter, page: page - 1 };
    getRequest(api.quotes(), quotesCallback, { ...Config, params });
  };

  const typeheadCallback = (arg) => {
    const { tags } = arg;
    const { authors } = arg;
    // const filtteredAuthors = authors.filter((author) =>
    //   filterAuthor(author.name, filter, author)
    // );
    const filteredTags = tags.filter((tag) => tag.name.match(filter));

    setAuthors(
      authors.filter((author) => filterAuthor(author.name, filter, author))
    );

    // if (filtteredAuthors.length !== 0) {
    //   setAuthors(filtteredAuthors);
    // } else {
    //   setAuthors(null);
    // }

    setTags(filteredTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest(api.quotes(), quotesCallback, Config);
    getRequest(api.typehead(), typeheadCallback, Config);
  };

  return (
    <div className="profilPageTemplate">
      <WordsRain
        words={[
          "Mark",

          "Cool",
          "Napoleon",
          "Shu Tzu",
          "Bad",
          "King",
          "Truman",
          "Happy",

          "Perfection",
          "Malcom X",
        ]}
      />

      <div className="main">
        <SearchBar
          handleSubmit={handleSubmit}
          search={search}
          result={result}
        />
        <SearchResult data={{ result, filter, vote }} />
        {page ? (
          <div
            className={arrayToString([
              flexRow,
              justifayCenter,
              "pageNavigation autoMargin",
            ])}
          >
            <button className="freeMargin" onClick={prevPage}>
              <img
                src="https://img.icons8.com/flat_round/64/000000/back--v1.png"
                alt="back"
              />
            </button>
            <span className="pageNumber"> {page}</span>
            <button className="freeMargin" onClick={nexPage}>
              <img
                src="https://img.icons8.com/flat_round/64/000000/circled-chevron-right.png"
                alt="next"
              />
            </button>
          </div>
        ) : null}
      </div>

      <Authors data={{ authors }} />
      {tags ? <Tags data={{ tags }} /> : null}
    </div>
  );
};

export default SearchPage;
