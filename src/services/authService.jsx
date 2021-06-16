import axios from "axios";

const API_URL = "https://localhost:5001/api/";

export function registerUser(user) {
  return axios.post(API_URL + "register", user);
}

export function loginUser(user) {
  return axios.post(API_URL + "login", user);
}
