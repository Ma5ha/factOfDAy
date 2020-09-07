import React from "react";
import { textCenter } from "../../styles/style.var";
import highlight from "../../hellpers/highlight";

const Quote = ({ quote: [str, filter], style = "" }) => {
  const { body } = str;
  return (
    <p className={`textCenter ${style}`}>
      <i>&#8220;{highlight(body, filter)}&rdquo;</i>
    </p>
  );
};

export default Quote;
