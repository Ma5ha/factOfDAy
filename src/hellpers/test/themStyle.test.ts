import themeStyle from "../theme";

global.localStorage.setItem("theme", "dark");

test("maps evry item in aray with local storage value", () => {
  expect(themeStyle(["m"])).toStrictEqual(["darkm"]);
});
