import React from "react";
import Filter from "../filter/filter";
import themeStyle from "../../hellpers/theme";
import styleToggle from "../../hellpers/styleToggle";
import AnimationList from "../animation/animationList";
import ListItem from "../animation/listItem";

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
        <AnimationList timeout={2000}>
          {authors.map((author, index) => (
            <ListItem key={author.name}>
              <Filter key={author.name} data={author} />
            </ListItem>
          ))}
        </AnimationList>
      </div>
    </div>
  ) : null;
};
export default Authors;
