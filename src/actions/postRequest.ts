import axios from "axios";

async function postRequest<T>(
  api: string,
  data?: any,
  config?: any,
  succses?: (req?) => void,
  error?: (err?) => void
) {
  try {
    const request = await axios.post<T>(api, data, config);
    if (succses) succses(request);
  } catch (err) {
    if (error) error(err);
  }
}

export default postRequest;
