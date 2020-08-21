import React from "react";
import { loggedIn } from "../../hellpers/isLogged";
import { Redirect } from "react-router-dom";
import ProfilePage from "../../pages/profilePage";

const PrivateRoute = () => {
  return loggedIn() ? <ProfilePage /> : <Redirect to="/home" />;
};

export default PrivateRoute;
