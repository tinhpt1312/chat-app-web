import { ILoginRequest, ILoginResponse, IRegisterRequest } from "../types/auth";
import { axiosInstance } from "./axios-instance";

const AuthAPI = {
  login: async (body: ILoginRequest): Promise<ILoginResponse> => {
    const response = await axiosInstance.post("auth/login", body);
    return response.data;
  },

  google: async (): Promise<ILoginResponse> => {
    const response = await axiosInstance.post("auth/google");
    return response.data;
  },

  register: async (body: IRegisterRequest): Promise<ILoginResponse> => {
    const response = await axiosInstance.post("auth/register", body);
    return response.data;
  },

  logout: async (): Promise<ILoginResponse> => {
    const response = await axiosInstance.post("auth/logout");
    return response.data;
  },

  checkAuth: async (): Promise<ILoginResponse> => {
    const response = await axiosInstance.get("auth/check");
    return response.data;
  },

  googleCallback: async (): Promise<ILoginResponse> => {
    const response = await axiosInstance.get("auth/google/callback");
    return response.data;
  },
};

export default AuthAPI;
