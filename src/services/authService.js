import axios from "axios";

export async function signInService(data) {
  let response = await axios.post(
    `https://j2c62.sse.codesandbox.io/signin`,
    data
  );
  return response.data;
}
