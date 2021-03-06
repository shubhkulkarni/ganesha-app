import axios from "axios";
import { formattedDate } from "./../utils/dateFormatter";

export async function fetchPayments(year = "receipt2020") {
  let response = await axios.get(
    `https://tembeganesha.firebaseio.com/${year}.json`
  );

  console.log("respo", response);
  if (response && response.data) {
    return await Object.values(response.data)
      .reverse()
      .map((item) => ({ ...item, date: formattedDate(item.date) }));
  }

  return [];
}
