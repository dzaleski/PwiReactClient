import axios from "axios";
import { authService } from "../services/authService";

const httpClient = axios.create({
  baseURL: "https://localhost:5001/api/",
});

httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${authService.tokenValue}`;
  return config;
});

httpClient.interceptors.response.use(null, (error) => {
  if (error.config && error.response && error.response.status === 401) {
    authService.logoutUser();
  }
  return Promise.reject(error);
});

export default httpClient;
