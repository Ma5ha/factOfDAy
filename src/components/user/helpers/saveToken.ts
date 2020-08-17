const saveToken = (arg: { ["User-Token"]: string }) => {
  sessionStorage.setItem("User-Token", JSON.stringify(arg));
};

export default saveToken;
