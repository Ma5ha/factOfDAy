import React, { useState } from "react";
import SearchBar from "../components/search/searchBar";
import useInputHook from "../customHooks/inputHook";
import { Heeaders } from "../actions/Headers";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";

const ProfilePage = () => {
  const [page, setPage] = useState<any>(0);
  const [result, setResult] = useState<any>(undefined);
  const [filter, search] = useInputHook("", "search", "Search quote");
  const [tags, setTags] = useState<any>();
  const [authors, setAuthors] = useState<any>();

  const Config = {
    headers: { ...Heeaders },
    params: { filter },
  };

  const quotesCallback = (arg) => {
    if (arg) {
      setResult(arg);
    }

    return;
  };

  const typeheadCallback = (arg) => {
    console.log(arg);
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
      <div className="sidebar">sidebar</div>.
    </div>
  );
};

export default ProfilePage;
