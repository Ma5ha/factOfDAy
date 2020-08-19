import React, { useState, useEffect, useContext } from "react";
import User from "../types/user";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import { useHistory } from "react-router-dom";
import deleteRequest from "../actions/deleteRequest";
import UserName from "../components/profile/userName";
import Email from "../components/profile/email";
import Counter from "../components/profile/counter";
import Image from "../components/profile/image";
import isLoggedin from "../context/login";
import styler from "../hellpers/styler";
import {
  flexRow,
  flexColumn,
  autoMargin,
  spaceAround,
} from "../styles/style.var";
import arrayToString from "../hellpers/arrayToString";

const ProfilePage = () => {
  const log = useContext(isLoggedin);
  const history = useHistory();
  const [user, setUser] = useState<User | undefined>();

  const config = {
    headers: { ...Heeaders },
  };

  const handlleLogOut = () => {
    deleteRequest(api.login(), config);
    sessionStorage.removeItem("User-Token");
    history.push("/home");

    log.set();
  };

  const callBack = (x) => {
    console.log(x);
    setUser(x);
  };

  useEffect(() => {
    getRequest(api.signUp(), callBack, config);
  }, []);

  // return user ? (
  //   <>

  //   </>
  // ) : (
  //   <h1> loading</h1>
  // );

  return (
    <div className={styler(["seconBackground"])}>
      <div className={arrayToString([flexColumn, autoMargin])}>
        {user ? (
          <div className={autoMargin}>
            <UserName user={user} />
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <Image user={user} />{" "}
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <Email user={user} />
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <Counter follow={user?.followers} type={"followers"} />
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <Counter follow={user?.following} type={"following"} />{" "}
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <Counter
              follow={user.account_details?.private_favorites_count}
              type={"Private favorites"}
            />
          </div>
        ) : null}
        {user ? (
          <div className={autoMargin}>
            <button onClick={handlleLogOut} className={styler(["Button"])}>
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ProfilePage;
