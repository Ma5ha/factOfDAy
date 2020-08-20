import React, { useState } from "react";

import themeStyle from "../../hellpers/theme";
import isValidEmail from "./helpers/validEmail";

const SignUp = ({ email: { bindEmail, email } }) => {
  const [validEmail, setValidEmail] = useState(true);

  const checkEmail = () => {
    setValidEmail(isValidEmail(email));
  };

  return (
    <>
      <label>Email</label>
      <br></br>
      <input
        className={themeStyle(["Input"])}
        {...bindEmail}
        onBlur={checkEmail}
      ></input>
      <br></br>
      {validEmail ? null : (
        <div className="errors">
          <p>Email must be valid!</p>
        </div>
      )}
    </>
  );
};

export default SignUp;
