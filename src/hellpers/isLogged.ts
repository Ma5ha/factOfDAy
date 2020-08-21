export const loggedIn = () => {
  console.log(token());
  return token() ? true : false;
};

const token = () => {
  const token = sessionStorage.getItem("User-Token");
  return token;
};

export default token;
