import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../stores/authStore"

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthStore()
  const location = useLocation();

  return (
    isLoggedIn
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default ProtectedRoute