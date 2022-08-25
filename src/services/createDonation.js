import axios from "axios";

const currentYear = new Date().getFullYear();

export async function createDonation(data) {

  let response = await axios.post(
    `https://tembeganesha.firebaseio.com/receipt${currentYear}.json`,
    data
  );
  return response.data;
}
