import api from "./api";

export const register = (user) => {
  return api.post("/auth/register", user);
};

export const refresh = () => {
  const request = {
    userId: localStorage.getItem("userId"),
    refreshToken: localStorage.getItem("refreshToken")
  };

  return api.post("/auth/refresh-token", request);
};
export const login = (user) => {
  return api.post("/auth/login", user);
};

 