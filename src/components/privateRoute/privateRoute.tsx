import React from "react";
import { loggedIn } from "../../hellpers/isLogged";
import { useHistory, Route, Redirect } from "react-router-dom";
import ProfilePage from "../../pages/profilePage";

const PrivateRoute = () => {
  const history = useHistory();
  return loggedIn() ? <ProfilePage /> : <Redirect to="/home" />;
};

export default PrivateRoute;
