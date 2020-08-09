import React from "react";

const SignUp = ({ email }) => {
  return (
    <>
      {" "}
      <label>Email</label>
      <input
        {...email}
        style={{ opacity: 1, width: "100px", height: "10px" }}
      ></input>
      <br></br>
    </>
  );
};

export default SignUp;
