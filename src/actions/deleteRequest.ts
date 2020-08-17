import axios from "axios";

const deleteRequest = async (api: string) => {
  const response = await axios.delete(api);
};
export default deleteRequest;
