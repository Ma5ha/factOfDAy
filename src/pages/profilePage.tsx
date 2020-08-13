import React, { useState } from "react";
import SearchBar from "../components/search/searchBar";
import useInputHook from "../customHooks/inputHook";
import { Heeaders } from "../actions/Headers";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import filterAuthor from "../hellpers/filterAuthor";

const ProfilePage = () => {
  const [page, setPage] = useState<any>(0);
  const [result, setResult] = useState<any>(undefined);
  const [filter, search] = useInputHook("", "search", "Search quote");
  const [tags, setTags] = useState<any[]>();
  const [authors, setAuthors] = useState<any>();

  const Config = {
    headers: { ...Heeaders },
    params: { filter },
  };

  const quotesCallback = (arg) => {
    if (arg) {
      console.log(arg);
      setResult(arg);

      console.log(tags);
    }

    return;
  };

  const typeheadCallback = (arg) => {
    console.log(arg);
    const { tags } = arg;
    const { authors } = arg;

    const fil = new RegExp(filter, "i");

    setAuthors(
      authors.filter((author) => filterAuthor(author.name, filter, author))
    );
    setTags(tags.filter((tag) => tag.name.match(filter)));
  };
  const getQuotes = () => {
    getRequest(api.quotes(), quotesCallback, Config);
  };

  const getTypehead = () => {
    getRequest(api.typehead(), typeheadCallback, Config);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuotes();
    getTypehead();
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
      </div>
      <div className="sidebar">
        {authors ? (
          <div className="tags flexColumn ">
            <h1>Author</h1>
            {authors.map((author) => (
              <Tag key={author.name} tag={author} />
            ))}
          </div>
        ) : null}

        {tags ? (
          <div className="tags flexColumn ">
            <h1>Tags</h1>
            {tags.map((tag) => (
              <Tag key={tag.name} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfilePage;

const Tag = ({ tag }) => {
  return (
    <div className="flexRow spaceAround">
      <p>{tag.name}</p>
      <p>{tag.count}</p>
    </div>
  );
};
