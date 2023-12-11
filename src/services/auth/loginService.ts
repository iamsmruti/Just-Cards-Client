import AxiosClient from "..";
import { AxiosResponse } from 'axios';

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  email: string;
}

export const login = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await AxiosClient.post('/auth/login', loginData);

    if (response.status === 200) {
      console.log(response)
      return response.data;
    } else {
      throw new Error(`Login failed with status: ${response.status}`);
    }

  } catch (error) {
    throw new Error(`Error during login: ${(error as Error).message}`);
  }
};
