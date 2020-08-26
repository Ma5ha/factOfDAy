import React from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";
import styleToggle from "../../hellpers/styleToggle";

const Authors = ({ data: { authors } }) => {
  const firstStyle = "tracking-in-expand";
  const secondStyle = "tracking-out-contract";
  const logicSwitch = authors?.length !== 0 ? true : undefined;

  return authors ? (
    <div
      className={[
        "author",
        styleToggle(secondStyle, firstStyle, logicSwitch),
      ].join(" ")}
    >
      <div className="tags flexColumn ">
        <h1>Author</h1>

        <hr className={themeStyle(["Line"]).join(" ")} />

        {authors.map((author, index) => (
          <Filter key={author.name} data={author} index={index * 0.3} />
        ))}
      </div>
    </div>
  ) : null;
};
export default Authors;
