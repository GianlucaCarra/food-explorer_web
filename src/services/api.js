import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-loqy.onrender.com",
  withCredentials: true
});