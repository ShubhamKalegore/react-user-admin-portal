import api from "./api";

export const getUsers = () => {
  return api.get("/users");
};

export const createUser = (user) => {
  return api.post("/users", user);
};

export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

export const deleteUser = (user) => {
  return api.delete("/users", {
    data: user
  });
};

export const updateUser = (user) => {
  return api.put("/users", user);
};