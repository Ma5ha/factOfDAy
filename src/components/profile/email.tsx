import React from "react";

const Email = ({
  user: {
    account_details: { email },
  },
}) => {
  return <div>Email: {email}</div>;
};

export default Email;
