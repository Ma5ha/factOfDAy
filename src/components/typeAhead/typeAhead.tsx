import React, { useEffect, useState } from "react";
import getRequest from "../../actions/getReequest";
import { Heeaders } from "../../actions/Headers";
import { api } from "../../enviroment/api";

const TypeAhead = ({ value }) => {
  const className = "typeAhead";
  const config = {
    headers: {
      ...Heeaders,
    },
  };
  const [typeAhead, setTypeAhead] = useState<any>();

  const [result, setResult] = useState<any>();

  useEffect(() => {
    getRequest(api.typehead(), setTypeAhead, config);
  }, []);

  const filter = () => {
    const { authors, tags } = typeAhead;

    const result = [
      ...authors.filter((author) => {
        return author.name.match(value);
      }),
      ...tags.filter((tag) => {
        return tag.name.match(value);
      }),
    ];

    setResult(result);
  };

  useEffect(() => {
    if (value?.length > 3) {
      filter();

      return;
    }
    setResult(null);
  }, [value]);

  return (
    <div {...{ className }}>
      {result
        ? result.map((result) => (
            <TypeAhedItem key={result.name} {...{ result }} />
          ))
        : null}
    </div>
  );
};

export default TypeAhead;

const TypeAhedItem = ({ result: { name } }) => {
  return <div className="typeaheadItem">{name}</div>;
};
