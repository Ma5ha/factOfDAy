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

import PrivateRoute from "./components/privateRoute/privateRoute";
import { loggedIn } from "./hellpers/isLogged";
import isLoggedin from "./context/login";
import themeStyle from "./hellpers/theme";
import ProfilePage from "./pages/profilePage";
import SearchPage from "./pages/shearchPage";
function App() {
  const [, setTheme] = useState(getTheme);
  const [user, setUser] = useState(loggedIn());
  return (
    <isLoggedin.Provider
      value={{
        user,
        set: () => {
          setUser(loggedIn());
        },
      }}
    >
      <Router>
        <NavBar>
          <ToggleButton data={setTheme} />
        </NavBar>
        <div
          className={arrayToString([
            flexColumn,
            flexCenter,
            autoMargin,
            "fullPage",
            ...themeStyle(["SeconBackground"]),
          ])}
        >
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
            <Route exact path="/Search">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </isLoggedin.Provider>
  );
}

export default App;
