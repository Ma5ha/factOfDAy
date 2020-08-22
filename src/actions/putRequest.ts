import axios from "axios";

async function putRequest(api, config) {
  const result = await axios.put(api, {}, config);
  console.log(result);
}

export default putRequest;
