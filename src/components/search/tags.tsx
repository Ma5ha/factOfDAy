import React from "react";
import Filter from "../filter/filter";

const Tags = ({ data: { tags } }) => {
  return (
    <div className="tags">
      {tags ? (
        <div className=" flexColumn ">
          <h1>Tags</h1>
          {tags.map((tag) => (
            <Filter key={tag.name} tag={tag} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Tags;
