import axios from "axios";

const sendMessage = async (data) => {
  const { amount, name, mobile: mobileNo } = data;
  const MESSAGE = `Thank you ${name} for contributing Rs. ${amount} to Shri Tembe Ganesh Mandal !`;
  const EncodedMessage = encodeURIComponent(MESSAGE);
  const URL = `https://j2c62.sse.codesandbox.io/sendMessage?user=tambeganesh&password=Tambeganesh&msisdn=91${mobileNo}&sid=TEMBEG&msg=${EncodedMessage}&fl=0&gwid=2`;

  await axios.get(URL);
};

export default sendMessage;
