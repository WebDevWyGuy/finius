import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import AuthPage from './pages/Auth';
import Budget from './pages/Budget';
import DashboardHome from './pages/Dashboard';
import Goals from './pages/Goals';
import LandingPage from './pages/Landing';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';

const protect = (element: React.ReactNode) => (
  <ProtectedRoute>{element}</ProtectedRoute>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={protect(<Layout />)}>
          <Route index element={<DashboardHome />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budget" element={<Budget />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/profile" element={protect(<Profile />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;