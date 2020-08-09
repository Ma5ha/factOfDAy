const saveToken = (arg: {
  ["User-token"]: string;
  login: string;
  email: string;
}) => {
  sessionStorage.setItem("User-token", JSON.stringify(arg));
};

export default saveToken;
