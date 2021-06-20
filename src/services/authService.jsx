import axios from "axios";
import { BehaviorSubject } from "rxjs";

const API_URL = "https://localhost:5001/api/";
const token = new BehaviorSubject("");
const TOKEN_KEY = "token";

function registerUser(user) {
  return axios.post(API_URL + "register", user);
}

function loginUser(user) {
  return axios.post(API_URL + "login", user).then((res) => {
    token.next(res.data.token);
    localStorage.setItem(TOKEN_KEY, res.data.token);
  });
}

function setTokenFromLocalStorage() {
  const tokenFromLocalStorage = localStorage.getItem(authService.TOKEN_KEY);
  if (tokenFromLocalStorage) {
    authService.setToken(tokenFromLocalStorage);
  }
}

function setToken(tokenFromLocalStorage) {
  token.next(tokenFromLocalStorage);
}

function logoutUser() {
  token.next("");
  localStorage.removeItem(TOKEN_KEY);
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
  TOKEN_KEY,
  setToken,
  setTokenFromLocalStorage,
};
