import React from "react";

const Login = ({ children, name, password }) => {
  return (
    <>
      <label>Name</label>
      <br></br>
      <input
        {...name}

        // value={login}
      ></input>
      <br></br>
      {children}
      <label>Password</label>
      <br></br>
      <input {...password}></input>
      <br></br>
    </>
  );
};

export default Login;
