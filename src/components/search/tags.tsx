import React from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";

const Tags = ({ data: { tags } }) => {
  if (tags !== null) {
    return (
      <div className="tags">
        <div className=" flexColumn ">
          <h1>Tags</h1>
          <hr className={themeStyle(["Line"]).join(" ")} />
          {tags.map((tag, index) => (
            <Filter key={tag.name} data={tag} index={index * 0.3} />
          ))}
        </div>
      </div>
    );
  }
};

export default Tags;
