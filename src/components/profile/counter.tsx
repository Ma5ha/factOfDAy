import React from "react";

const Counter = ({ follow, type }) => {
  return (
    <div>
      {type}: {follow}
    </div>
  );
};

export default Counter;
