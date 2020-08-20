const isPasswordValid = (password: string): boolean => {
  const passLength = password.length;
  const isMoreThen5 = passLength >= 5;
  const isLessThen20 = passLength < 120;
  if (isMoreThen5 && isLessThen20) return true;
  return false;
};

export default isPasswordValid;
