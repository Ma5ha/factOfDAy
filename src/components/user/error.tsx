import React from "react";

const ErrorMessage = ({ data }) => {
  return data ? (
    <div className="errorMessage textCenter">
      <p>{data}</p>
    </div>
  ) : null;
};

export default ErrorMessage;
