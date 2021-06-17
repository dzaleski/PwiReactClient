import axios from "axios";
import { authService } from "../services/authService";

const httpClient = axios.create({
  baseURL: "https://localhost:5001/api/",
});

httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${authService.tokenValue}`;
  return config;
});

export default httpClient;
