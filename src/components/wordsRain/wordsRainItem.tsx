import React from "react";

interface props {
  word: string;
}

const WordsRainItem = ({ word }: props) => {
  return (
    <div className="item">
      <span className="rainDrop">{word}</span>
    </div>
  );
};

export default WordsRainItem;
