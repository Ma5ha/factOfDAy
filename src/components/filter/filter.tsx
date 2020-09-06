import React from "react";
import { Link } from "react-router-dom";
const Filter = ({ data: { name, count } }) => {
  // const animation = `fade-in-bottom 2s cubic-bezier(0.39, 0.575, 0.565, 1) ${index}s both`;

  return (
    <Link
      to={`author/${name}`}
      className={"none flexRow spaceAround filter "}
      key={name}
    >
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="number">
        <p>{count}</p>
      </div>
    </Link>
  );
};

export default Filter;
