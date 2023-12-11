import axios, { AxiosInstance } from "axios";
import { API } from "../utils/constants";

const AxiosClient: AxiosInstance = axios.create();

const customHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
  source: "WEB",
};

AxiosClient.defaults.headers = customHeaders as any;
AxiosClient.defaults.baseURL = API;
AxiosClient.defaults.withCredentials = true;

export default AxiosClient;
