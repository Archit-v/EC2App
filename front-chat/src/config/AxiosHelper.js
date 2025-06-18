import axios from "axios";
export const baseURL = "http://3.7.108.87:8081";
export const httpClient = axios.create({
  baseURL: baseURL,
});
         