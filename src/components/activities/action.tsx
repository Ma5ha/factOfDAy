import React from "react";

const Action = ({ action }) => {
  const className = "action flexRow spaceBetween";
  return (
    <div {...{ className }}>
      <h3>Action</h3>
      <p>{action}</p>
    </div>
  );
};

export default Action;
