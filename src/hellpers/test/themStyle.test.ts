import themeStyle from "../theme";

test("maps every item in aray with local storage value(null)", () => {
  expect(themeStyle(["m"])).toStrictEqual(["whitem"]);
});

test("maps every item in aray with local storage value(dark)", () => {
  global.localStorage.setItem("theme", "dark");
  expect(themeStyle(["m"])).toStrictEqual(["darkm"]);
});

test("maps every item in aray with local storage value(white)", () => {
  global.localStorage.setItem("theme", "white");
  expect(themeStyle(["m"])).toStrictEqual(["whitem"]);
});
