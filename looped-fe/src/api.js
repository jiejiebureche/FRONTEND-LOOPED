import axios from "axios";

const AUTH_TOKEN_KEY = "AUTH_TOKEN"; // new key for localStorage

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// attach token automatically for every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
export { AUTH_TOKEN_KEY };
