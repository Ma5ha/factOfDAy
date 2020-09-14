import React, { useEffect, useRef } from "react";
import "./wordsRain.css";
import WordsRainItem from "./wordsRainItem";
interface prop {
  words: string[];
}

const WordsRain = ({ words }: prop) => {
  const wordsAnimation = useRef<any>();

  useEffect(() => {
    const node = wordsAnimation.current.firstChild;
    nodIterator(node);
  });
  const nodIterator = (node) => {
    const currentNode = node;

    if (currentNode === null) {
      return;
    }
    startAnimation(currentNode);

    nodIterator(currentNode.nextSibling);
    currentNode.onanimationend = () => {
      console.log("as");
    };
    // currentNode.animationstart((e) => {
    //   nodIterator(currentNode.nextSibling);
    // });
  };

  const startAnimation = (child) => {
    // child.hidden = false;
    child.classList.toggle("animatedItem");
    // child.style.animationDelay = `${10 * Math.random()}s;`;

    child.style.animationDelay = `${10 * Math.random()}s`;
  };
  return (
    <div ref={wordsAnimation} className="rainAnimation">
      {words.map((word) => (
        <WordsRainItem key={word} word={word} />
      ))}
    </div>
  );
};

export default WordsRain;
