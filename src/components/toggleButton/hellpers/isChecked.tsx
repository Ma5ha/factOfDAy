const isChecked = (): boolean => {
  const activatedTheme = localStorage.getItem("theme");

  if (activatedTheme === "dark") return true;
  return false;
};

export default isChecked;
