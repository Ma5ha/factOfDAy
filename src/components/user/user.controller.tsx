import React, { useState, useContext } from "react";
import useInputHook from "../../customHooks/inputHook";
import "./user.css";
import Login from "./login";
import SignUp from "./signUp";
import postRequest from "../../actions/postRequest";
import { Heeaders } from "../../actions/Headers";
import saveToken from "./helpers/saveToken";
import loginOrSignupUrl from "./helpers/loginSringupUrl";
import { loggedIn } from "../../hellpers/isLogged";
import { useHistory } from "react-router-dom";
import isLoggedin from "../../context/login";

import styler from "../../hellpers/styler";
import ErrorMessage from "./error";
import isValidName from "./helpers/validName";
import isPasswordValid from "./helpers/isValidPassword";
import isValidEmail from "./helpers/validEmail";
import themeStyle from "../../hellpers/theme";

const UserCotnroller = () => {
  const { Authorization } = Heeaders;
  const [errorMessage, setErrorMessage] = useState<string>();
  const buttonStyle = ["Button"];
  const logged = useContext(isLoggedin);
  const history = useHistory();

  const [email, bindEmail, resetEmail] = useInputHook(
    "",
    "",
    "Enter email here"
  );
  const [password, bindPassword, resetPassword] = useInputHook(
    "",
    "password",
    "Enter password here"
  );
  const [login, bindName, resetName] = useInputHook("", "", "Enter name here");
  const [signup, setSignup] = useState<boolean>(false);
  const user = {
    login,
    password,
    email,
  };

  const validForm = () => {
    const logIn = isValidName(login) && isPasswordValid(password);

    if (signup && logIn && isValidEmail(email)) {
      return false;
    }

    if (logIn && signup === false) {
      return false;
    }
    return true;
  };

  const resetForm = () => {
    resetEmail();
    resetPassword();
    resetName();
  };

  const handlleSubmit = (e) => {
    e.preventDefault();

    postRequest(
      loginOrSignupUrl(signup),
      { user },
      { headers: { Authorization } },
      (req) => {
        if (req.data.error_code) {
          setErrorMessage(req.data.message);
          return;
        }

        saveToken(req.data["User-Token"]);
        if (loggedIn()) {
          history.push("/profile");
          logged.set();
        }
      }
    );

    resetForm();
    return;
  };

  return (
    <div className="formMargin">
      <ErrorMessage data={errorMessage} />

      <form
        className={themeStyle(["Form"]).join("")}
        onSubmit={handlleSubmit}
        style={{ margin: "auto" }}
      >
        <Login name={{ bindName, login }} password={{ bindPassword, password }}>
          {signup ? <SignUp email={{ bindEmail, email }} /> : null}
        </Login>

        <button disabled={validForm()} className={styler(buttonStyle)}>
          Submit
        </button>
        <br></br>
      </form>
      <div className="formSwitch">
        {signup ? (
          <div className="formMessage">
            <h3>
              You have account?{" "}
              <span onClick={() => setSignup(!signup)} className="clickHere">
                Click here
              </span>{" "}
              to login!
            </h3>
          </div>
        ) : (
          <div className="formMessage">
            <h3>
              You don`t have account?{" "}
              <span onClick={() => setSignup(!signup)} className="clickHere">
                Click here
              </span>{" "}
              to signup!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCotnroller;
