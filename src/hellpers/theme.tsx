type stringArray = string[];

// const activeTheme = (): string => {
//
// };

const themeStyle = (unmapedArray: stringArray): stringArray => {
  const activeTheme = localStorage.getItem("theme");
  const mapedArray = unmapedArray.map((style) => activeTheme + style);

  return mapedArray;
};

export default themeStyle;
