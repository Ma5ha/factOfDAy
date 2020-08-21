import { Link } from "react-router-dom";
import React from "react";
const link = (array: string[], styles?) => {
  return array.map((link) => (
    <Link key={link} className={styles} to={`/${link.toLowerCase()}`}>
      {link}
    </Link>
  ));
};

export default link;
