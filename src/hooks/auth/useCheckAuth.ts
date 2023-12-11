import { useState } from 'react';
import { getUserData, UserData } from '../../services/auth/authCheckService';
import useAuthStore from '../../stores/authStore';

interface UseUserDataHook {
  fetchUserData: () => Promise<void>;
  loading: boolean;
  error: string | null;
  userData: UserData | null;
}

const useUserData: () => UseUserDataHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const authStore = useAuthStore()

  const fetchUserData: UseUserDataHook['fetchUserData'] = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getUserData();
      setUserData(result.data);
      
      if(result.data.userId) {
        authStore.login()
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchUserData, loading, error, userData };
};

export default useUserData;
