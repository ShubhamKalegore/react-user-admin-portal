import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7265/api" // your backend URL
});

export default api;