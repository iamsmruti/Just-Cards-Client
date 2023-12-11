import { useState } from 'react';
import { LoginRequest, login as loginService, LoginResponse } from '../../services/auth/loginService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';

interface UseLoginHook {
  login: (loginData: LoginRequest) => Promise<void>;
  loading: boolean;
  error: string | null;
  userData: LoginResponse | null;
}

const useLogin: () => UseLoginHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<LoginResponse | null>(null);

  const navigate = useNavigate()
  const authStore = useAuthStore()

  const login = async (loginData: LoginRequest): Promise<void> => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const result = await loginService(loginData);
      setUserData(result);

      if(result.username) {
        toast('Success')
        navigate('/')
        authStore.login()
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, userData };
};

export default useLogin;
