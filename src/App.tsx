import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./ProtectedRoute"
import DashboardPage from "./pages/DashboardPage"

function App() {
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
