import React from "react";

const Author = ({ quote: { author }, style = "" }) => {
  return (
    <p className={`textCenter ${style}`}>
      Author:<b> {author}</b>
    </p>
  );
};

export default Author;
