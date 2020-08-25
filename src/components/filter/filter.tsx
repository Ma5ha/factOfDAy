import React from "react";

const Filter = ({ tag }) => {
  return (
    <div className="flexRow spaceAround filter fade-in-bottom">
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
