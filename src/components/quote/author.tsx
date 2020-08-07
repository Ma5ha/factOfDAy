import React from "react";
import { textCenter } from "../../styles/style.var";

const Author = ({ quote: { author } }) => {
  return (
    <p className={textCenter}>
      Author:<b> {author}</b>
    </p>
  );
};

export default Author;
