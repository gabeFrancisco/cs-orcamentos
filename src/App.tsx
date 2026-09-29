import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./ProtectedRoute"
import DashboardPage from "./pages/DashboardPage"
import { supabase } from "./lib/supabase"
import useAppStore from "./store/store"
import { useEffect } from "react"

function App() {
  const setUser = useAppStore((state) => state.setUser)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  )

}

export default App
