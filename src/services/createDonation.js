import axios from "axios";
import { formattedDate } from "./../utils/dateFormatter";

export async function createDonation(data) {
  let response = await axios.post(
    `https://tembeganesha.firebaseio.com/receipt2021.json`,
    data
  );
  return response.data;
}
