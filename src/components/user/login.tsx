import React from "react";

const Login = ({ children, name, password }) => {
  return (
    <>
      <label>Name</label>
      <input
        {...name}
        style={{ opacity: 1, width: "100px", height: "10px" }}
        // value={login}
      ></input>
      <br></br>
      {children}
      <label>Password</label>
      <input
        style={{ opacity: 1, width: "100px", height: "10px" }}
        {...password}
      ></input>
      <br></br>
    </>
  );
};

export default Login;
