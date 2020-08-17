import React, { useState } from "react";
import NavBar from "./components/navBar/navbar";

import getTheme from "./styles/setTheme";
import ToggleButton from "./components/toggleButton/toggle";

import "./styles/global.css";

import { flexColumn, autoMargin, flexCenter } from "./styles/style.var";
import arrayToString from "./hellpers/arrayToString";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/authPage";
import ProfilePage from "./pages/profilePage";
import PrivateRoute from "./components/privateRoute/privateRoute";
function App() {
  const [, setTheme] = useState(getTheme);

  return (
    <Router>
      <NavBar>
        <ToggleButton data={setTheme} />
      </NavBar>
      <div className={arrayToString([flexColumn, flexCenter, autoMargin])}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home">
            <HomePage />
          </Route>
          <Route exact path="/Sign in">
            <AuthPage />
          </Route>
          <Route exact path="/Profile">
            <PrivateRoute></PrivateRoute>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
