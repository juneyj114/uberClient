import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: { "X-JWT": localStorage.getItem("jwt") || "" },
  withCredentials: true
});

export default instance;
