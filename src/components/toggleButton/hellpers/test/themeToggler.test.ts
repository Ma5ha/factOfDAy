import themeToggler from "../themeToggler";

test("expect theme to be dark", () => {
  themeToggler();
  expect(global.localStorage.getItem("theme")).toBe("dark");
});

test("expect theme to be white", () => {
  global.localStorage.setItem("theme", "dark");

  themeToggler();
  expect(global.localStorage.getItem("theme")).toBe("white");
});
