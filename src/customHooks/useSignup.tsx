import { useHistory } from "react-router-dom";
import { loggedIn } from "../hellpers/isLogged";

export const useSignupRedirect = (callback) => {
  const history = useHistory();

  const onClick = () => {
    if (loggedIn() === false) {
      if (
        window.confirm(
          "For this action u must be Sign in. Do you want to sign in now?"
        )
      ) {
        history.push("/sign in");
        return;
      }
      return;
    }

    callback();
  };

  return { onClick };
};
