const loggedIn = () => {
  return token() ? true : false;
};

export default loggedIn;

const token = () => {
  const token = sessionStorage.getItem("User-token");
  return token;
};
