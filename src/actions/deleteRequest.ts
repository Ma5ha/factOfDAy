import axios from "axios";

const deleteRequest = async (api: string, config?) => {
  const response = await axios.delete(api, config);
};
export default deleteRequest;
