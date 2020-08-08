import React, { useState } from "react";
import useInputHook from "../../customHooks/inputHook";
import { api } from "../../enviroment/api";
import Login from "./login";
import SignUp from "./signUp";

const UserCotnroller = () => {
  const [email, bindEmail, resetEmail] = useInputHook("", "email");
  const [password, bindPassword, resetPassword] = useInputHook("", "password");
  const [login, bindName, resetName] = useInputHook("");

  const user = {
    login,
    password,
    email,
  };
  const state = true;
  const resetForm = () => {
    // resetEmail();
    // resetPassword();
  };
  const handlleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <form onSubmit={handlleSubmit}>
      <Login>
        <label>Name</label>
        <input
          {...bindName}
          style={{ opacity: 1, width: "100px", height: "10px" }}
          // value={login}
        ></input>
        <br></br>
        {state ? (
          <SignUp>
            <label>Email</label>
            <input
              {...bindEmail}
              style={{ opacity: 1, width: "100px", height: "10px" }}
            ></input>
            <br></br>
          </SignUp>
        ) : null}

        <label>Password</label>
        <input
          style={{ opacity: 1, width: "100px", height: "10px" }}
          {...bindPassword}
        ></input>
        <br></br>
      </Login>

      <button>Submit</button>
    </form>
  );
};

export default UserCotnroller;
