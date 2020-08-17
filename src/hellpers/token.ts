const token = () => {
  const token = sessionStorage.getItem("User-Token");
  return token;
};

export default token;
