import React from "react";

const Votes = ({ votes, children }) => {
  return (
    <h6 className={textCenter}>
      {children} {votes}
    </h6>
  );
};

export default Votes;
