import React, { useState, useEffect } from "react";
import { User } from "../../pages/profilePage";

const UserName = ({ user: { login } }) => {
  return <h4>User:{login}</h4>;
};

export default UserName;
