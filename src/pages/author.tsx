import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import Quote from "../components/quote/quote";

const AuthorPage = () => {
  const { name } = useParams();
  const config = {
    headers: { ...Heeaders },
    params: { filter: name, type: "author" },
  };

  const [author, setAuthor] = useState<any[]>();

  const auhtorCallback = (arg) => {
    setAuthor(arg.quotes);
  };

  useEffect(() => {
    getRequest(api.quotes(), auhtorCallback, { ...config });
  }, []);
  //   return author ? author.map((quote) => <Quote quote={quote} />) : null;

  return <h1>mashashas</h1>;
};

export default AuthorPage;
