import axios from "axios";

export async function signInService(data) {
  let response = await axios.post(
    `https://qfok3.sse.codesandbox.io/signin`,
    data
  );
  return response.data;
}
