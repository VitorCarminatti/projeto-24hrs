import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://192.168.192.29/projeto-24-horas-api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true,
  credential: "same-origin",
  mode: "no-cors"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
