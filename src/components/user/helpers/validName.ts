const isValidName = (name: string): boolean => {
  const length = name.length;
  const condition = length >= 1 && length < 20;
  const regExp = /[a-z\d_]{1,20}/;
  if (name.match(regExp) && condition) {
    return true;
  }
  return false;
};

export default isValidName;
