import useAuthStore from "../../stores/authStore"
import { useState } from "react"
import { logout as logoutService } from "../../services/auth/logoutService"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface useLogoutHook {
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useLogout : () => useLogoutHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate()
  const authStore = useAuthStore()

  const logout = async () : Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const result = await logoutService();

      if(result) {
        authStore.logout()
        navigate('/login')
        toast('Logged out Successfully')
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, logout}
}

export default useLogout