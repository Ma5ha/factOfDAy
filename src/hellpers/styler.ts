import themeStyle from "./theme";
import arrayToString from "./arrayToString";

const styler = (arg: string[]) => {
  return arrayToString([...themeStyle(arg)]);
};

export default styler;
