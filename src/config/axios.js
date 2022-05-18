import axios from "axios";
import { API_URL } from "../config/env";
import { getAccessToken } from "../services/localStroage";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
