import React from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";

const Tags = ({ data: { tags } }) => {
  return (
    <div className="tags">
      {tags ? (
        <div className=" flexColumn ">
          <h1>Tags</h1>
          <hr className={themeStyle(["Line"]).join(" ")} />
          {tags.map((tag, index) => (
            <Filter key={tag.name} data={tag} index={index * 0.3} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Tags;
