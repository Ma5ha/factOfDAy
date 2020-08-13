const filterAuthor = (string, filter, obj) => {
  const array = arrayMy(string);
  if (
    array.some((x) => {
      return equalCallback(x, filter);
    })
  ) {
    return obj;
  }
};

const arrayMy = (string) => {
  return string.split(" ");
};

const equalCallback = (arg1, arg2) => {
  return arg1.toLowerCase() === arg2.toLowerCase();
};

export default filterAuthor;
