import React from "react";
import themeStyle from "../../hellpers/theme";

const SlideDot = ({
  slideObject: { setSlide, index, setAnimation, animation, slide },
  isSelected,
}) => {
  const nextAnimation = () => {
    if (!animation) {
      setAnimation(true);
    }
    return;
  };
  const prevAnimation = () => {
    if (animation) {
      setAnimation(false);
    }
    return;
  };

  const setSlideLogic = () => {
    if (slide < index) {
      nextAnimation();
      setSlide(index);
      return;
    }
    prevAnimation();
    setSlide(index);
  };

  const selected = () => {
    if (isSelected) {
      return themeStyle(["SelectedDot"]).join("");
    }
    return " ";
  };
  return (
    <span
      className={"dotRound " + themeStyle(["Dot"]).join("") + " " + selected()}
      onClick={setSlideLogic}
    ></span>
  );
};

export default SlideDot;
