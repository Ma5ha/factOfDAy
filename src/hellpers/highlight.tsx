import React from "react";

const highlight = (str: string, filter: string) => {
  const regExp = new RegExp(filter, "i");
  if (filter.length === 0) {
    return str;
  }

  if (str.length !== 0 && str.match(regExp) !== null) {
    const startIndex = str.match(regExp).index;
    const match = str.slice(startIndex, startIndex + filter.length);
    const prefix = str.slice(0, startIndex);
    const sulfix = str.slice(startIndex + filter.length);
    return (
      <>
        {prefix}
        <mark>{match}</mark>
        {highlight(sulfix, filter)}
      </>
    );
  }

  return str;
};

export default highlight;
