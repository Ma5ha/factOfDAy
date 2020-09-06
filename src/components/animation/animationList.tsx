import React, { useRef, useState, useCallback, useEffect } from "react";
import "./animatedList.css";
import enterListAnimation from "./hellper/enterAnimation";

const AnimationList = ({ children, timeout }) => {
  const fadeInBottom = "fade-in-bottom";

  const animatedList = useRef<any>();

  const enterAnimation = () => {
    const startNode = 0,
      endNode = children.length;
    enterListAnimation(startNode, endNode, animatedList, fadeInBottom, timeout);
  };

  useEffect(() => {
    enterAnimation();
  });

  return (
    <div>
      <div ref={animatedList} className="animatedList ">
        {children}
      </div>
    </div>
  );
};

export default AnimationList;
