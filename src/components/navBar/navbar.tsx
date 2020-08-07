import React from "react";
import "./navbar.css";
import themeStyle from "../../hellpers/theme";
import arrayToString from "../../hellpers/arrayToString";
import "../../styles/global.css";
import { flexCenter, flexRow } from "../../styles/style.var";

type prop = {
  children: JSX.Element;
};
const NavBar = ({ children }) => {
  return (
    <nav
      className={arrayToString([
        "bottomMarginNav",
        flexRow,
        flexCenter,
        ...themeStyle(["BackGround"]),
      ])}
    >
      {children}
    </nav>
  );
};

export default NavBar;
