import axios from "axios";
import { formattedDate } from "./../utils/dateFormatter";

const currentYear = new Date().getFullYear();

export async function fetchPayments(year = `receipt${currentYear}`) {
  let response = await axios.get(
    `https://tembeganesha.firebaseio.com/${year}.json`
  );

  console.log("respo", response);
  if (response && response.data) {
    return await Object.entries(response.data)
      .reverse()
      .map((item) => ({ ...item[1],_id:item[0], date: formattedDate(item[1].date) }));
  }

  return [];
}
