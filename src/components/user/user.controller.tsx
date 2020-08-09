import React, { useState } from "react";
import useInputHook from "../../customHooks/inputHook";
import { api } from "../../enviroment/api";
import Login from "./login";
import SignUp from "./signUp";

const UserCotnroller = () => {
  const [email, bindEmail, resetEmail] = useInputHook("", "email");
  const [password, bindPassword, resetPassword] = useInputHook("", "password");
  const [login, bindName, resetName] = useInputHook("");
  const [signup, setSignup] = useState<boolean>(false);
  const user = {
    login,
    password,
    email,
  };

  const resetForm = () => {
    resetEmail();
    resetPassword();
    resetName();
  };
  const handlleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ margin: "auto" }}>
      <form onSubmit={handlleSubmit} style={{ margin: "auto" }}>
        <Login>
          <label>Name</label>
          <input
            {...bindName}
            style={{ opacity: 1, width: "100px", height: "10px" }}
            // value={login}
          ></input>
          <br></br>
          {signup ? (
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

      {signup ? (
        <button onClick={() => setSignup(!signup)}>Login</button>
      ) : (
        <button onClick={() => setSignup(!signup)}>SignUp</button>
      )}
    </div>
  );
};

export default UserCotnroller;
