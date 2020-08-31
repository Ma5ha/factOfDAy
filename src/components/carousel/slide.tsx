import React, { useState, useEffect } from "react";
const Slide = ({ children, animation }) => {
  const { enter, exit } = animation;

  const [onDisplay, setOnDisplay] = useState<any>();
  const [componentEntered, setComponent] = useState<boolean>();

  useEffect(() => {
    setComponent(true);
  }, [children]);

  const handlleExit = () => {
    setComponent(false);
    setOnDisplay(children);
  };
  return componentEntered ? (
    <div
      {...exit}
      onAnimationEnd={() => {
        handlleExit();
      }}
    >
      {onDisplay}
    </div>
  ) : (
    <div {...enter}>{onDisplay}</div>
  );
};

export default Slide;
