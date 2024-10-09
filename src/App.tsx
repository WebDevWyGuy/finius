import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Transactions from "./components/Transactions";
import Budget from "./components/Budget";
import Goals from "./components/Goals";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

// Define the type for the wrap function's parameters
const protect = (element: React.ReactNode) => (
  <ProtectedRoute>{element}</ProtectedRoute>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={protect(<Dashboard />)}>
          <Route index element={<DashboardHome />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budget" element={<Budget />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/dashboard/profile" element={protect(<Profile />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
