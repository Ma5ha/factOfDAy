import React from "react";

import renderer from "react-test-renderer";

import NavBar from "../navbar";
import ToggleButton from "../../toggleButton/toggle";

it("shoud renderd darkBackground", () => {
  global.localStorage.setItem("theme", "dark");
  const nav = renderer
    .create(
      <NavBar>
        <ToggleButton />
      </NavBar>
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
  console.log(nav);
});
