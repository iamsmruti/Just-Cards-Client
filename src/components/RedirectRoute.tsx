import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../stores/authStore"

const RedirectRoute = () => {
  const { isLoggedIn } = useAuthStore()
  const location = useLocation();

  return (
    !isLoggedIn
      ? <Outlet />
      : <Navigate to="/" state={{ from: location }} replace />
  );
}

export default RedirectRoute