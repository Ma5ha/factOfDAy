import React from "react";
import { textCenter } from "../../styles/style.var";

const Votes = ({ votes, children }) => {
  return (
    <h6 className={textCenter}>
      {children} {votes}
    </h6>
  );
};

export default Votes;
