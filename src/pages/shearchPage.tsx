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

const SearchPage = () => {
  const [page, setPage] = useState<any>();
  const [result, setResult] = useState<any>(undefined);
  const [filter, search] = useInputHook("", "search", "Search quote");
  const [tags, setTags] = useState<any[]>();
  const [authors, setAuthors] = useState<any>();
  const [lastPage, setLastPage] = useState<unknown>();

  let Config = {
    headers: { ...Heeaders },
    params: { filter, page },
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
        />
        {page ? (
          <div className={arrayToString([flexRow, justifayCenter])}>
            <button className="freeMargin" onClick={prevPage}>
              &#60;
            </button>
            {page}
            <button className="freeMargin" onClick={nexPage}>
              &#62;
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
