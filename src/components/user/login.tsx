import React from "react";
import themeStyle from "../../hellpers/theme";

const Login = ({ children, name, password }) => {
  return (
    <>
      <label>Name</label>
      <br></br>
      <input
        className={themeStyle(["Input"])}
        {...name}

        // value={login}
      ></input>
      <br></br>
      {children}
      <label>Password</label>
      <br></br>
      <input className={themeStyle(["Input"])} {...password}></input>
      <br></br>
    </>
  );
};

export default Login;
