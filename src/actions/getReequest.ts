import axios from "axios";

async function getRequest<T>(api: string, callback: (result: T) => void) {
  const reslut = await axios.get<T>(api);
  callback(reslut.data);
  //   console.log(reslut.data);
}

export default getRequest;
