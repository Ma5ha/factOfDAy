import React, { useState } from "react";
import SearchBar from "../components/search/searchBar";
import useInputHook from "../customHooks/inputHook";
import { Heeaders } from "../actions/Headers";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import filterAuthor from "../hellpers/filterAuthor";
import Filter from "../components/filter/filter";
import arrayToString from "../hellpers/arrayToString";
import { flexRow, justifayCenter } from "../styles/style.var";
import putRequest from "../actions/putRequest";

import token from "../hellpers/isLogged";
import postRequest from "../actions/postRequest";

const SearchPage = () => {
  const [page, setPage] = useState<any>();
  const [result, setResult] = useState<any>(undefined);
  const [filter, search] = useInputHook("", "search", "Search quote");
  const [tags, setTags] = useState<any[]>();
  const [authors, setAuthors] = useState<any>();
  const [lastPage, setLastPage] = useState<unknown>();

  let Config = {
    headers: { ...Heeaders, "User-Token": token() },
    params: { filter, page },
  };

  const vote = (url) => {
    putRequest(url, Config);
    getRequest(api.quotes(), quotesCallback, { ...Config });

    // putRequest(url, Config, (x) => {
    //   const changedQuote = x.data;

    //   quotes.map((quote) => {
    //     if (quote.id === changedQuote.id) {
    //       quote = changedQuote;
    //     }
    //     const updateResult = { ...result, ...quote };
    //     setResult(updateResult);
    //   });
    // });
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

    setAuthors(
      authors.filter((author) => filterAuthor(author.name, filter, author))
    );
    setTags(tags.filter((tag) => tag.name.match(filter)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest(api.quotes(), quotesCallback, Config);
    getRequest(api.typehead(), typeheadCallback, Config);
  };

  return (
    <div className="profilPageTemplate">
      <div className="main">
        <SearchBar
          handleSubmit={handleSubmit}
          search={search}
          result={result}
          filter={filter}
          vote={vote}
        />
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
      <div className="authors">
        {authors ? (
          <div className="tags flexColumn ">
            <h1>Author</h1>
            {authors.map((author) => (
              <Filter key={author.name} tag={author} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="tags">
        {tags ? (
          <div className="tags flexColumn ">
            <h1>Tags</h1>
            {tags.map((tag) => (
              <Filter key={tag.name} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
