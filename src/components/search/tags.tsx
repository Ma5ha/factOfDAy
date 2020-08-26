import React from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";
import styleToggle from "../../hellpers/styleToggle";

const Tags = ({ data: { tags } }) => {
  const firstStyle = "tracking-in-expand";
  const secondStyle = "tracking-out-contract";
  const logicSwitch = tags?.length !== 0 ? true : undefined;

  return tags ? (
    <div
      className={[
        "tags",
        styleToggle(secondStyle, firstStyle, logicSwitch),
      ].join(" ")}
    >
      <div className=" flexColumn ">
        <h1>Tags</h1>
        <hr className={themeStyle(["Line"]).join(" ")} />
        {tags.map((tag, index) => (
          <Filter key={tag.name} data={tag} index={index * 0.3} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Tags;
