import axios from "axios";

const API_URL = "https://localhost:5001/api/";

function getCurrentUser(token) {
  return axios.get(API_URL + "users", token);
}

export const usersService = {
  getCurrentUser,
};
