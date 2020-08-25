import React, { useState } from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";

const Authors = ({ data: { authors } }) => {
  const [showAuthors, setAuthors] = useState(authors.slice(0, 4));

  const loadMore = () => {
    setAuthors(authors);
  };

  return (
    <div className="authors">
      {authors ? (
        <div className="tags flexColumn ">
          <h1>Author</h1>
          {showAuthors.map((author) => (
            <Filter key={author.name} tag={author} />
          ))}
        </div>
      ) : null}
      <div className="lineWarper">
        <hr className={themeStyle(["Line"]).join(" ")} />
        <div className="flexRow spaceAround">
          <img
            onClick={loadMore}
            src="https://img.icons8.com/flat_round/64/000000/expand-arrow--v1.png"
            alt="expand"
          />
        </div>
      </div>
    </div>
  );
};
export default Authors;
