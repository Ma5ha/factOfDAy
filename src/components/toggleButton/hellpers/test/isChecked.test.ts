import isChecked from "../isChecked";

test("retruns ture if dark theme is activated", () => {
  global.localStorage.setItem("theme", "dark");
  expect(isChecked()).toBe(true);
});

test("retruns false if whihte theme is activated", () => {
  global.localStorage.setItem("theme", "white");
  expect(isChecked()).toBe(false);
});

test("retruns false if no value is  activated", () => {
  global.localStorage.setItem("theme", "null");
  expect(isChecked()).toBe(false);
});
