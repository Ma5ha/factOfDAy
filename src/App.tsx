import React, { useState } from "react";
import NavBar from "./components/navBar/navbar";

import getTheme from "./styles/setTheme";
import ToggleButton from "./components/toggleButton/toggle";
import themeStyle from "./hellpers/theme";
import "./styles/global.css";
import QuoteController from "./components/quote/quoteContorller";
import { flexColumn, autoMargin } from "./styles/style.var";
import arrayToString from "./hellpers/arrayToString";

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
    </div>
  );
}

export default App;
