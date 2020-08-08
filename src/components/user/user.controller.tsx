import React, { useState } from "react";
import useInputHook from "../../customHooks/inputHook";

const UserCotnroller = () => {
  const [email, bindEmail, resetEmail] = useInputHook("", "email");
  const [password, bindPassword, resetPassword] = useInputHook("", "password");
  const [login, bindName, resetName] = useInputHook("");

  const user = {
    login,
    password,
    email,
  };

  const resetForm = () => {
    // resetEmail();
    // resetPassword();
  };
  const handlleSubmit = (e) => {
    e.preventDefault();

    resetForm();
  };

  return (
    <form onSubmit={handlleSubmit}>
      <label>Nanme</label>
      <input
        {...bindName}
        style={{ opacity: 1, width: "100px", height: "10px" }}
        // value={login}
      ></input>
      <br></br>
      <label>email</label>
      <input
        {...bindEmail}
        style={{ opacity: 1, width: "100px", height: "10px" }}
        value={email}
      ></input>
      <br></br>
      <label>Password</label>
      <input
        style={{ opacity: 1, width: "100px", height: "10px" }}
        {...bindPassword}
        value={password}
      ></input>
      <br></br>

      <button>Submit</button>
    </form>
  );
};

export default UserCotnroller;
