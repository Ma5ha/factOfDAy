import React from "react";

const Action = ({ action }) => {
  const className = "action flexRow spaceBetween";
  return (
    <div {...{ className }}>
      <h3>{action}</h3>
    </div>
  );
};

export default Action;
