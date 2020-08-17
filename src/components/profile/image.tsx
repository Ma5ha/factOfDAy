import React from "react";

const Image = ({ user: { pic_url } }) => {
  return <img width="20px" src={pic_url} alt="user pic"></img>;
};

export default Image;
