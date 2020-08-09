import { api } from "../../../enviroment/api";

const loginOrSignupUrl = (arg: boolean) => {
  const signUp = api.signUp();
  const session = api.login();

  return arg ? signUp : session;
};

export default loginOrSignupUrl;
