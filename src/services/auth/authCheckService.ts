// loginService.ts
import axios from 'axios';

interface LoginRequest {
  loginId: string; // username or email
  password: string;
}

interface LoginResponse {
  token: string; // Assuming the server responds with a token upon successful login
  user: {
    id: string;
    username: string;
    email: string;
    // ... other user data
  };
}

export const login = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/api/login', loginData);

    if (response.status === 200) {
      return response.data;
    } else {
      // Handle non-200 status codes if needed
      throw new Error(`Login failed with status: ${response.status}`);
    }
  } catch (error) {
    // Handle network errors, server errors, etc.
    throw new Error(`Error during login: ${(error as Error).message}`);
  }
};
