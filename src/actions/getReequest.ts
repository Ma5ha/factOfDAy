import axios from "axios";

async function getRequest<T>(
  api: string,
  callback: (result: T) => void,
  config?: any
) {
  const reslut = await axios.get<T>(api, config);
  callback(reslut.data);
}

export default getRequest;
