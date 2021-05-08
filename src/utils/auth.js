import jwt from "jsonwebtoken";
import { NotificationManager } from "react-notifications";
import { decodeJWT } from "./decodeJWT";

const getToken = async (payload) => {
  let token = await jwt.sign(payload, process.env.SECRET, {
    expiresIn: "2h",
  });
  await localStorage.setItem("accessToken", token);
};
export const checkAuth = ({ username, password }) => {
  const condition =
    username === process.env.USERNAME && password === process.env.PASSWORD;

  if (condition) {
    getToken({ id: process.env.USERNAME });
    return true;
  } else {
    localStorage.removeItem("accessToken");
    NotificationManager.error("Invalid username or password", "Error");
    return false;
  }
};

export const checkAuthStatus = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  const decodedToken = decodeJWT(token);
  console.log(decodedToken);
  if (!decodedToken) {
    return false;
  }
  console.log(Date.now(), decodedToken.exp * 1000);
  if (Date.now() >= decodedToken.exp * 1000) {
    return false;
  }
  return true;
};
