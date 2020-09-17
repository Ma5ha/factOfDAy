import React from "react";

const Activities = ({ activities: { action, message } }) => {
  return (
    <div className="activities">
      <Action {...{ action }} /> <ActionMessage {...{ message }} />
    </div>
  );
};

export default Activities;

const Action = ({ action }) => {
  return (
    <div className="action">
      <h6>Action</h6>
      <p>{action}</p>
    </div>
  );
};

const ActionMessage = ({ message }) => {
  return (
    <div className="message">
      <h6>Message</h6>
      <p>{message}</p>
    </div>
  );
};
