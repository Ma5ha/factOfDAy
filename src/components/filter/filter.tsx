import React from "react";

const Filter = ({ tag }) => {
  return (
    <div className="flexRow spaceAround filter">
      <div className="name">
        <p>{tag.name}</p>
      </div>
      <div className="number">
        <p>{tag.count}</p>
      </div>
    </div>
  );
};

export default Filter;
