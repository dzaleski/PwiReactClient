import axios from "axios";
import { BehaviorSubject } from "rxjs";

const API_URL = "https://localhost:5001/api/";
const token = new BehaviorSubject("");

function registerUser(user) {
  return axios.post(API_URL + "register", user);
}

function loginUser(user) {
  return axios.post(API_URL + "login", user).then((res) => {
    token.next(res.data.token);
  });
}

function logoutUser() {
  token.next("");
}

export const authService = {
  loginUser,
  registerUser,
  logoutUser,
  token: token.asObservable(),
  get tokenValue() {
    return token.value;
  },
  get isLogged() {
    return token.value !== "";
  },
};
