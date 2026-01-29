import { Navigate, Outlet } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useAppContext } from "../../AppContex"
 

const ProtectedAdminRoute = () => {
  const { token } = useAppContext();

  if (!token) {
    return <Navigate to="/login" replace />
  }

  try {
    const decoded = jwtDecode(token)

    if (decoded.role !== "admin") {
      return <Navigate to="/" replace />
    }

    return <Outlet />
  } catch (err) {
   
    return <Navigate to="/login" replace />
  }
}

export default ProtectedAdminRoute
