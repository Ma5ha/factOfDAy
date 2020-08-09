import axios from "axios";

async function postRequest<T>(
  api: string,
  data?: any,
  config?: any,
  callback?: (req?) => void
) {
  const request = await axios.post<T>(api, data, config);
  if (callback) callback(request.data);
  return;
}

export default postRequest;
