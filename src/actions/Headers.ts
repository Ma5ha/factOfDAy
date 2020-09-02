import { api } from "../enviroment/api";
import token from "../hellpers/isLogged";

export const Heeaders = {
  Authorization: ` Token token=${api.key}`,
  "User-Token": token(),
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Content-Type": "apilication/json",
  Accept: "application/vnd.favqs.v2+json",
};
