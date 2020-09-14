import { NavLink } from "react-router-dom";
import React from "react";
const link = (array: string[], styles?, active?) => {
  return array.map((link) => (
    <NavLink
      key={link}
      className={styles}
      to={`/${link.toLowerCase()}`}
      activeClassName={active}
    >
      {link}
    </NavLink>
  ));
};

export default link;
