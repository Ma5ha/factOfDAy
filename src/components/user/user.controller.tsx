import React, { useState } from "react";
import useInputHook from "../../customHooks/inputHook";
import { api } from "../../enviroment/api";
import Login from "./login";
import SignUp from "./signUp";
import postRequest from "../../actions/postRequest";
import { Heeaders } from "../../actions/Headers";
import saveToken from "./helpers/saveToken";

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

  const loginOrSignup = () => {
    const signUp = api.signUp();
    const session = api.login();

    return signup ? signUp : session;
  };

  const handlleSubmit = (e) => {
    const url = loginOrSignup();
    console.log(url, user);
    e.preventDefault();
    postRequest(url, { user }, { headers: { ...Heeaders } }, saveToken);
    resetForm();
  };

  return (
    <div style={{ margin: "auto" }}>
      <form onSubmit={handlleSubmit} style={{ margin: "auto" }}>
        <Login name={bindName} password={bindPassword}>
          {signup ? <SignUp email={bindEmail} /> : null}
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
