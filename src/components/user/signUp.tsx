import React from "react";

import themeStyle from "../../hellpers/theme";

const SignUp = ({ email }) => {
  return (
    <>
      <label>Email</label>
      <br></br>
      <input className={themeStyle(["Input"])} {...email}></input>
      <br></br>
    </>
  );
};

export default SignUp;
