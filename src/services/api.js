import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:3334",
  withCredentials: true
});