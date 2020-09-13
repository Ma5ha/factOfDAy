import { useHistory } from "react-router-dom";

const useRedirect = (arg) => {
  let history = useHistory();
  const redirect = () => history.push(arg);
  return [redirect];
};

export default useRedirect;
