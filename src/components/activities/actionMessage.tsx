import React from "react";

const ActionMessage = ({ trackable_value }) => {
  return (
    <div className="message">
      <p>{trackable_value}</p>
    </div>
  );
};

export default ActionMessage;
