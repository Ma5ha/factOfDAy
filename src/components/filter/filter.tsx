import React from "react";

const Filter = ({ tag }) => {
  return (
    <div className="flexRow spaceAround">
      <p>{tag.name}</p>
      <p>{tag.count}</p>
    </div>
  );
};

export default Filter;
