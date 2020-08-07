const themeToggler = (): void => {
  const theme = localStorage.getItem("theme");

  if (theme === null || theme === "white") {
    darkTheme();
    return;
  }
  whiteTheme();
};

const whiteTheme = (): void => localStorage.setItem("theme", "white");
const darkTheme = (): void => localStorage.setItem("theme", "dark");
export default themeToggler;
