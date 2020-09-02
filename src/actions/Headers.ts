import { api } from "../enviroment/api";
import token from "../hellpers/isLogged";

export const Heeaders = {
  Authorization: ` Token token=${api.key}`,
  "User-Token": token(),
  "Access-Control-Allow-Origin": "*",
};
