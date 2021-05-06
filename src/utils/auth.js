import jwt from "jsonwebtoken";
import { NotificationManager } from "react-notifications";
import { decodeJWT } from "./decodeJWT";

const getToken = async (payload) => {
  let token = await jwt.sign(payload, "ShriTembeGaneshMandal2021", {
    expiresIn: "2h",
  });
  await localStorage.setItem("accessToken", token);
};
export const checkAuth = ({ username, password }) => {
  const condition = username === "dhundhiraj" && password === "admin12345";

  if (condition) {
    getToken({ id: "dhundhiraj" });
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
  if (!decodedToken) {
    return false;
  }

  if (Date.now() >= decodedToken.exp * 1000) {
    return false;
  }
  return true;
};
