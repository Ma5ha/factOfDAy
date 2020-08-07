const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === null) return "white";
  return theme;
};

export default getTheme;
