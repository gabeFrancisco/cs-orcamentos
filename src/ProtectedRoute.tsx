import { Navigate, Outlet } from "react-router";
import { supabase } from "./lib/supabase";

function ProtectedRoute() {
    const user = supabase.auth.getSession().then((res) => res.data.session.user)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute;