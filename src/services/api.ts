import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://si-microlearning-api.herokuapp.com"
    : "https://si-microlearning-api.herokuapp.com";

const api = axios.create({
  baseURL,
});

export default api;
