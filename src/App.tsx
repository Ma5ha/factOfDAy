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

function App() {
  const [, setTheme] = useState(getTheme);

  return (
    <div className={arrayToString([flexColumn, autoMargin, "spaceAround"])}>
      <NavBar>
        <ToggleButton data={setTheme} />
      </NavBar>
      <div className={autoMargin}>
        <QuoteController />
      </div>
      <div className={arrayToString([flexColumn, autoMargin, "spaceAround"])}>
        <UserCotnroller />
      </div>
    </div>
  );
}

export default App;
