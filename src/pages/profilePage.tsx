import React, { useState, useEffect } from "react";
import getRequest from "../actions/getReequest";
import { api } from "../enviroment/api";
import { Heeaders } from "../actions/Headers";
import { useHistory } from "react-router-dom";
import deleteRequest from "../actions/deleteRequest";

export interface User {
  login: string;
  pic_url: string;
  public_favorites_count: number;
  followers: number;
  following: number;
  pro: boolean;
  account_details: AccountDetails;
}
export interface AccountDetails {
  email: string;
  private_favorites_count: number;
  active_theme_id: number;
  pro_expiration: string;
}

const ProfilePage = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>();

  const config = {
    headers: { ...Heeaders },
    params: {
      filter: "gose",
    },
  };

  const handlleLogOut = () => {
    sessionStorage.removeItem("User-Token");
    history.push("/home");
    deleteRequest(api.login());
  };

  const callBack = (x) => {
    console.log(x);
    setUser(x);
  };

  useEffect(() => {
    getRequest(api.signUp(), callBack, config);
  }, []);

  const getActivitys = () => {
    getRequest(api.base + "activities", console.log, config);
  };
  return user ? (
    <>
      {user ? <UserName user={user} /> : null}
      {user ? <Image user={user} /> : null}
      {user ? <Email user={user} /> : null}
      {user ? <Counter follow={user.followers} type={"followers"} /> : null}
      {user ? <Counter follow={user.following} type={"following"} /> : null}
      {user ? (
        <Counter
          follow={user.account_details.private_favorites_count}
          type={"Private favorites"}
        />
      ) : null}
      {user ? <button onClick={handlleLogOut}>Log Out</button> : null}
    </>
  ) : (
    <h1> loading</h1>
  );
};
export default ProfilePage;

const UserName = ({ user: { login } }) => {
  return <h4>User:{login}</h4>;
};

const Image = ({ user: { pic_url } }) => {
  return <img width="20px" src={pic_url} alt="user pic"></img>;
};

const Email = ({
  user: {
    account_details: { email },
  },
}) => {
  return <div>Email: {email}</div>;
};

const Counter = ({ follow, type }) => {
  return (
    <div>
      {type}: {follow}
    </div>
  );
};
