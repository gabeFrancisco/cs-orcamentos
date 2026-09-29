import { Navigate, Outlet } from "react-router";
import { supabase } from "./lib/supabase";
import { useEffect, useState } from "react";

function ProtectedRoute() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getUser() {

            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error(error);
                setLoading(false);
                return;
            }

            setUser(data.session?.user ?? null);
            setLoading(false);
        }

        getUser();

    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;