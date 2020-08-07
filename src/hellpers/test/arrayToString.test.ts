import arrayToString from "../arrayToString";

// const arrayToString = (array) => {
//   return array.join(" ");
// };

test("converts array of strings to one string", () => {
  expect(arrayToString(["masha", "sasa"])).toBe("masha sasa");
});

test("converts array of stringsArray to single string", () => {
  expect(arrayToString([["masha"], ["sasa"]])).toBe("masha sasa");
});
