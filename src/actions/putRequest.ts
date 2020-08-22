import axios from "axios";

async function putRequest(api, config, callback?) {
  const result = await axios.put(api, {}, config);
  if (callback) {
    callback(result);
  }
}

export default putRequest;
