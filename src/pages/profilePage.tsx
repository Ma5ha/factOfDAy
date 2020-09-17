import React, { useState, useEffect, useContext } from "react";
import User from "../types/user";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import { useHistory } from "react-router-dom";
import deleteRequest from "../actions/deleteRequest";

import isLoggedin from "../context/login";
import styler from "../hellpers/styler";

import token from "../hellpers/isLogged";
import UserProfile from "../components/profile/userProfile";

const ProfilePage = () => {
  const log = useContext(isLoggedin);
  const history = useHistory();
  const [user, setUser] = useState<User>();

  const config = {
    headers: { ...Heeaders, "User-Token": token() },
  };

  const handlleLogOut = () => {
    deleteRequest(api.login(), config);
    sessionStorage.removeItem("User-Token");
    history.push("/home");

    log.set();
  };

  const signUpCallBack = (x) => {
    setUser(x);
  };
  const activitesCallBack = (x) => {
    console.log(x);
  };
  useEffect(() => {
    getRequest(api.signUp(), signUpCallBack, config);
  }, []);

  // useEffect(() => {
  //   getRequest(api.activities(), activitesCallBack, config);
  // });

  return user ? (
    <div className={styler(["seconBackground"])}>
      <UserProfile user={user}>
        <button onClick={handlleLogOut} className={styler(["Button"])}>
          Log Out
        </button>
      </UserProfile>
    </div>
  ) : null;
};

export default ProfilePage;
