type stringArray = string[];

// const activeTheme = (): string => {
//
// };

const themeStyle = (unmapedArray: stringArray): stringArray => {
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme === null) return mapppedArray(unmapedArray, "white");
  return mapppedArray(unmapedArray, activeTheme);
};

export default themeStyle;

const mapppedArray = (unmapedArray, theme) => {
  const mapedArray = unmapedArray.map((style) => theme + style);

  return mapedArray;
};
