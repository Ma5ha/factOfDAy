import React from "react";
import { textCenter } from "../../styles/style.var";

const Author = ({ quote: { author }, style = "" }) => {
  return (
    <p className={`textCenter ${style}`}>
      Author:<b> {author}</b>
    </p>
  );
};

export default Author;
