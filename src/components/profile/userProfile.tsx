import React from "react";
import arrayToString from "../../hellpers/arrayToString";
import { flexColumn, autoMargin } from "../../styles/style.var";
import Counter from "./counter";
import Email from "./email";
import UserName from "./userName";
import Image from "./image";
const UserProfile = ({ user, children }) => {
  return (
    <div className={arrayToString([flexColumn, autoMargin])}>
      <div className={autoMargin}>
        <UserName user={user} />
      </div>
      <div className={autoMargin}>
        <Image user={user} />
      </div>
      <div className={autoMargin}>
        <Email user={user} />
      </div>
      <div className={autoMargin}>
        <Counter follow={user?.followers} type={"followers"} />
      </div>
      <div className={autoMargin}>
        <Counter follow={user?.following} type={"following"} />{" "}
      </div>
      <div className={autoMargin}>
        <Counter
          follow={user.account_details?.private_favorites_count}
          type={"Private favorites"}
        />
        <div className={autoMargin}>{children}</div>
      </div>
    </div>
  );
};

export default UserProfile;
