import React, { useState } from "react";
import "./carousel.css";
const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index <= children.length - 2) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };

  const previous = () => {
    if (index === 0) {
      setIndex(children.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="carousel">
      {children[index]}
      <button onClick={next}>next</button>
      <button onClick={previous}>prev</button>
    </div>
  );
};

export default Carousel;
