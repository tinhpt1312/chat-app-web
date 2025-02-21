import type { AxiosError } from "axios";
import { API_URL } from "../constants";
import { ICookieStoreObj } from "../types/common";
import { convertObjectToCookies } from "../utils/common";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => Promise.reject(error.response?.data)
);

export const setHeaderCookies = (cookieStore: ICookieStoreObj[]) => {
  axiosInstance.defaults.headers.Cookie = convertObjectToCookies(cookieStore);
};

export { axiosInstance };
