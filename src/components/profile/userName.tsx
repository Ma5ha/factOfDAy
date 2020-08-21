import React from "react";

const UserName = ({ user: { login } }) => {
  return <h4>User:{login}</h4>;
};

export default UserName;
