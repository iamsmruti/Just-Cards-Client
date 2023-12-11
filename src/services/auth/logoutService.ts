import AxiosClient from "..";

export const logout = async () => {
  try {
    const response = await AxiosClient.get('/auth/logout');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Logout failed with status: ${response.status}`);
    }

  } catch (error) {
    throw new Error(`Error during logout: ${(error as Error).message}`);
  }
}