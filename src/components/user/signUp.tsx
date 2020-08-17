import React from "react";

const SignUp = ({ email }) => {
  return (
    <>
      <label>Email</label>
      <br></br>
      <input {...email}></input>
      <br></br>
    </>
  );
};

export default SignUp;
