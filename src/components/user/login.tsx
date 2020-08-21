import React, { useState } from "react";
import themeStyle from "../../hellpers/theme";
import isValidName from "./helpers/validName";
import isPasswordValid from "./helpers/isValidPassword";

const Login = ({
  children,
  name: { bindName, login },
  password: { bindPassword, password },
}) => {
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const shortNameError = login.length < 1;
  const longNameError = login.length > 20;
  const invalidNameCharacter = isValidName(login);

  const checkName = () => {
    if (isValidName(login)) {
      return;
    }
    setValidName(false);
  };
  const checkPassword = () => {
    setValidPassword(isPasswordValid(password));
  };

  return (
    <>
      <label>Name</label>
      <br></br>
      <input
        className={themeStyle(["Input"])}
        {...bindName}
        onBlur={checkName}
        // value={login}
      ></input>
      {validName ? null : (
        <div className="errors">
          {shortNameError ? (
            <p>Name is too short, must be more than one charater</p>
          ) : null}

          {longNameError ? (
            <p>Name is too long, must be less than 20 charaters</p>
          ) : null}

          {invalidNameCharacter ? null : (
            <p>
              Name can only contain letters (a-z), numbers (0-9) and the
              underscore (_)
            </p>
          )}
        </div>
      )}

      <br></br>
      {children}
      <label>Password</label>
      <br></br>
      <input
        className={themeStyle(["Input"])}
        {...bindPassword}
        autoComplete="on"
        onBlur={checkPassword}
      ></input>
      <br></br>

      {validPassword ? null : (
        <div className="errors">
          <p>Password length must be between 5 and 120 characters</p>
        </div>
      )}
    </>
  );
};

export default Login;
