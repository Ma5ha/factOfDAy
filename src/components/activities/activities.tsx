import React from "react";
import Action from "./action";
import ActionMessage from "./actionMessage";
import ActionType from "./actionType";
import "./activities.css";
const Activities = ({
  activities: { action, trackable_value, trackable_type },
}) => {
  return (
    <div className="activities">
      <Action {...{ action }} /> <ActionType {...{ trackable_type }} />
      <ActionMessage {...{ trackable_value }} />
    </div>
  );
};

export default Activities;
