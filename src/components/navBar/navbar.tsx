import React, { useContext } from "react";
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
import isLoggedin from "../../context/login";
import styler from "../../hellpers/styler";

const NavBar = ({ children }) => {
  const links: string[] = ["Home", "Search", "Sign in"]; // maust start with capital letter
  const protectedRoutes: string[] = ["Profile"];
  const loggedin = useContext(isLoggedin);

  return (
    <nav
      style={{ marginBottom: "0px" }}
      className={arrayToString([
        "solidBottomBorder",
        "bottomMarginNav",
        spaceBetween,
        flexRow,
        flexCenter,

        ...themeStyle(["BackGround", "Border"]),
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
        {link(links, styler(["ThirdColor"]))}
        {loggedin.user
          ? link(protectedRoutes, ...themeStyle(["ThirdColor"]))
          : null}
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
