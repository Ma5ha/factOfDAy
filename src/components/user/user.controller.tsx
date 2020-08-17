import React, { useState } from "react";
import useInputHook from "../../customHooks/inputHook";

import Login from "./login";
import SignUp from "./signUp";
import postRequest from "../../actions/postRequest";
import { Heeaders } from "../../actions/Headers";
import saveToken from "./helpers/saveToken";
import loginOrSignupUrl from "./helpers/loginSringupUrl";
import loggedIn from "../../hellpers/isLogged";
import token from "../../hellpers/token";

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

  const getToken = () => {
    const to = token();
    console.log(to);
  };
  const handlleSubmit = (e) => {
    e.preventDefault();
    postRequest(
      loginOrSignupUrl(signup),
      { user },
      { headers: { ...Heeaders } },
      (req) => {
        if (req.data.error_code) {
          return;
        }
        console.log(req.data);
        saveToken(req.data["User-Token"]);
      }
    );
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

      <button onClick={getToken}>token</button>
    </div>
  );
};

export default UserCotnroller;
