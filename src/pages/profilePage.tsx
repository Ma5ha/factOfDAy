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
    <div className="darkSeconBackground">
      {user ? <UserName user={user} /> : null}
      {user ? <Image user={user} /> : null}
      {user ? <Email user={user} /> : null}
      {user ? <Counter follow={user?.followers} type={"followers"} /> : null}
      {user ? <Counter follow={user?.following} type={"following"} /> : null}
      {user ? (
        <Counter
          follow={user.account_details?.private_favorites_count}
          type={"Private favorites"}
        />
      ) : null}
      {user ? <button onClick={handlleLogOut}>Log Out</button> : null}
    </div>
  );
};
export default ProfilePage;
