import React, { useState } from "react";
import NavBar from "./components/navBar/navbar";

import getTheme from "./styles/setTheme";
import ToggleButton from "./components/toggleButton/toggle";
import themeStyle from "./hellpers/theme";
import "./styles/global.css";
import QuoteController from "./components/quote/quoteContorller";
import { flexColumn, autoMargin } from "./styles/style.var";
import arrayToString from "./hellpers/arrayToString";
import UserCotnroller from "./components/user/user.controller";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home";
function App() {
  const [, setTheme] = useState(getTheme);

  return (
    <Router>
      <div className={arrayToString([flexColumn, autoMargin, "spaceAround"])}>
        <NavBar>
          <ToggleButton data={setTheme} />
        </NavBar>
        <div className={autoMargin}></div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home">
            <HomePage />
          </Route>
          <Route exact path="/User">
            <UserCotnroller />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
