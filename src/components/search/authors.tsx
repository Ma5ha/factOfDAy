import React, { useState, useRef, useEffect } from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";

const Authors = ({ data: { authors } }) => {
  return (
    <div className="authors">
      <div className="tags flexColumn ">
        <h1>Author</h1>

        <hr className={themeStyle(["Line"]).join(" ")} />

        {authors.map((author, index) => (
          <Filter key={author.name} data={author} index={index * 0.3} />
        ))}
      </div>
    </div>
  );
};
export default Authors;
