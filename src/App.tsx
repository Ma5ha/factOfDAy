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

import SearchPage from "./pages/shearchPage";
import Authors from "./components/search/authors";
import Author from "./pages/author";
import AuthorPage from "./pages/author";
import TagPage from "./pages/tagPage";
import Modal from "./components/modal/modal";
import ModalButton from "./components/modal/modalButton";
function App() {
  const [, setTheme] = useState(getTheme);
  const [user, setUser] = useState(loggedIn());
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className={arrayToString([
        flexColumn,
        flexCenter,
        autoMargin,
        "fullPage",
        ...themeStyle(["SeconBackground"]),
      ])}
    >
      <isLoggedin.Provider
        value={{
          user,
          set: () => {
            setUser(loggedIn());
          },
        }}
      >
        {showModal ? <Modal /> : null}

        <Router>
          <NavBar>
            <ToggleButton data={setTheme} />
          </NavBar>
          <div>
            <ModalButton
              clickHandler={() => {
                setShowModal(!showModal);
              }}
            />
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
              <Route exact path="/author/:name">
                <AuthorPage />
              </Route>
              <Route exact path="/tag/:tag">
                <TagPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </isLoggedin.Provider>
    </div>
  );
}

export default App;
