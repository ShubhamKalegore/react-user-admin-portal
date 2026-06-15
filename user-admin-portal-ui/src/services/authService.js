import api from "./api";

export const register = (user) => {
  return api.post("/auth/register", user);
};

export const refresh = () => {
  return api.post(
    "/auth/refresh-token",
    {}
  );
};
export const login = (user) => {
  return api.post("/auth/login", user);
};

 