import { useHistory } from "react-router-dom";

export const useSignupRedirect = () => {
  const history = useHistory();

  const onClick = () => {
    if (
      window.confirm(
        "For this action u must be Sign in. Do you want to sign in now?"
      )
    ) {
      history.push("/sign in");
      return;
    }
  };
  return { onClick };
};
