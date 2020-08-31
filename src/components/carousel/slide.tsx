import React, { useState, useEffect, Children } from "react";
const Slide = ({ children, animation }) => {
  const { enter, exit } = animation;

  const [onDisplay, setOnDisplay] = useState<any>();
  const [componentEntered, setComponentEntered] = useState<boolean>(true);

  const componentUpdateLogic = () => {
    if (children?.key !== onDisplay?.key) {
      setComponentEntered(true);
    }
    return;
  };

  useEffect(() => {
    componentUpdateLogic();
  }, [children]);

  const handlleExit = () => {
    setComponentEntered(false);
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
