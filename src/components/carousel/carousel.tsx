import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";
import Slide from "./slide";
import SlideDot from "./dotIndicator";
import themeStyle from "../../hellpers/theme";

const Carousel = ({ children }) => {
  let enter = { className: "slideInRight" };
  let exit = { className: "slideOutLeft" };
  let enterA = { className: "slideInLeft" };
  let exitA = { className: "slideOutRight" };

  const [animation, setAnimation] = useState(true);
  const [slide, setSlide] = useState(0);

  const next = () => {
    if (!animation) {
      setAnimation(true);
    }
    if (slide <= children.length - 2) {
      setSlide(slide + 1);

      return;
    }
    setSlide(0);
  };

  const previous = () => {
    if (animation) {
      setAnimation(false);
    }

    if (slide === 0) {
      setSlide(children.length - 1);

      return;
    }

    setSlide(slide - 1);
  };

  return (
    <div className="flexColumn flexCenter autoMargin">
      <div className="carousel autoMargin">
        <div
          className={"slideFrame " + themeStyle(["CarouselSlide"]).join(" ")}
        >
          <div className={"slideQuote autoMargin "}>
            {animation ? (
              <Slide animation={{ enter, exit }}>{children[slide]}</Slide>
            ) : (
              <Slide animation={{ enter: enterA, exit: exitA }}>
                {children[slide]}
              </Slide>
            )}
          </div>
          <div className={"slideQuote autoMargin "}></div>

          <div
            className={
              "slides " + themeStyle(["CarouselSlideBottom"]).join(" ")
            }
          >
            {children.map((i, index) => (
              <SlideDot
                isSelected={slide === index}
                key={i.key}
                slideObject={{
                  setSlide,
                  index,
                  setAnimation,
                  animation,
                  slide,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="buttons autoMargin">
        <button
          className={`round ${themeStyle(["Button"]).join("")}`}
          onClick={() => {
            previous();
          }}
        >
          prev
        </button>
        <button
          className={`round ${themeStyle(["Button"]).join("")}`}
          onClick={() => {
            next();
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
