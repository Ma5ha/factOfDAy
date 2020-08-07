import React from "react";

import renderer from "react-test-renderer";

import NavBar from "../navbar";

it("sasas", () => {
  const nav = renderer.create(<NavBar />).toJSON();
  expect(nav).toMatchSnapshot();
  console.log(nav);
});
