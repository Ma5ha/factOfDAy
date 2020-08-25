import React from "react";

const Filter = ({ data: { name, count }, index }) => {
  const animation = `fade-in-bottom 2s cubic-bezier(0.39, 0.575, 0.565, 1) ${index}s both`;

  return (
    <div className="flexRow spaceAround filter" style={{ animation }}>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="number">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Filter;
