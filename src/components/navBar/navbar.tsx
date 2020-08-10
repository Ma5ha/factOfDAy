import React from "react";
import "./navbar.css";
import themeStyle from "../../hellpers/theme";
import arrayToString from "../../hellpers/arrayToString";
import "../../styles/global.css";
import {
  flexCenter,
  flexRow,
  spaceBetween,
  flexColumn,
  spaceAround,
  textCenter,
  autoMargin,
} from "../../styles/style.var";

import { Link } from "react-router-dom";
import loggedIn from "../../hellpers/isLogged";

const NavBar = ({ children }) => {
  const links: string[] = ["Home", "Sign in"]; // maust start with capital letter
  return (
    <nav
      className={arrayToString([
        "bottomMarginNav",
        spaceBetween,
        flexRow,
        flexCenter,
        ...themeStyle(["BackGround"]),
      ])}
    >
      <div
        className={arrayToString([
          flexRow,
          flexCenter,
          spaceAround,
          textCenter,
        ])}
      >
        {link(links, arrayToString([]))}
        {loggedIn() ? <h1>dam boi</h1> : null}
      </div>
      {children}
    </nav>
  );
};

export default NavBar;

const link = (array: string[], styles?) => {
  return array.map((link) => (
    <Link key={link} className={styles} to={`/${link.toLowerCase()}`}>
      {link}
    </Link>
  ));
};
