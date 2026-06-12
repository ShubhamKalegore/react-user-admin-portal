import axios from "axios";
import { refresh } from "./authService";

const api = axios.create({
  baseURL: "https://localhost:7265/api"
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite refresh loop
    if (originalRequest.url === "/auth/refresh-token") {
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await refresh();

        localStorage.setItem(
          "accessToken",
          refreshResponse.data.accessToken
        );

        localStorage.setItem(
          "refreshToken",
          refreshResponse.data.refreshToken
        );

        localStorage.setItem(
          "userId",
          refreshResponse.data.userId
        );

        originalRequest.headers.Authorization =
          `Bearer ${refreshResponse.data.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;