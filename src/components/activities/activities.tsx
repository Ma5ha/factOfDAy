import React from "react";
import Action from "./action";
import ActionMessage from "./actionMessage";
import "./activities.css";
const Activities = ({ activities: { action, message } }) => {
  return (
    <div className="activities">
      <Action {...{ action }} /> <ActionMessage {...{ message }} />
    </div>
  );
};

export default Activities;
