import AxiosClient from "../";

interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface UserData {
  email: string;
  username: string;
  userId: string;
}

export const getUserData = async (): Promise<ApiResponse<UserData>> => {
  try {
    const response = await AxiosClient.get<UserData>("/auth/checkAuth");
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
