import { Navigate, Outlet } from "react-router";
import useAppStore from "./store/store";

function ProtectedRoute() {
    const user = useAppStore(state => state.user)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute;