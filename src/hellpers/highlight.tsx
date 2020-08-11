import React from "react";

const highlight = (str: string, filter: string) => {
  if (filter.length === 0) {
    return str;
  }

  if (str.length !== 0 && str.match(filter) !== null) {
    const startIndex = str.match(filter)?.index;
    const prefix = str.slice(0, startIndex);
    const sulfix = str.slice(startIndex + filter.length);
    return (
      <>
        {prefix}
        <mark>{filter}</mark>
        {highlight(sulfix, filter)}
      </>
    );
  }

  return str;
};

export default highlight;
