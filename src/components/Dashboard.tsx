import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Home,
  PieChart,
  DollarSign,
  Target,
  Settings,
  User,
  LogOut,
} from 'lucide-react';
import { logout } from '../utils/auth';

const Dashboard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavItem = ({
    to,
    icon,
    children,
  }: {
    to: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center p-4 rounded-[10px] border ${
          isActive
            ? 'bg-[rgb(41,42,58)] border-[#292a3a]'
            : 'border-[#292a3a] hover:bg-[rgb(51,52,68)]'
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );

  return (
    <div className="flex flex-col h-screen bg-[rgb(20,20,20)] text-dark-text">
      {/* Header */}
      <header className="bg-[rgb(20,20,20)] border-b border-[#332] flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dark-primary p-4">
          Finius Financial
        </h1>
        <div className="relative h-full" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center h-full px-4 space-x-2 focus:outline-none border-l border-[#332]"
          >
            <span>Jebediah</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[rgb(20,20,20)] rounded-md shadow-lg py-1 border border-[#332]">
              <NavLink
                to="/dashboard/profile"
                className="block px-4 py-2 text-sm hover:bg-[rgb(51,52,68)]"
                onClick={() => setIsDropdownOpen(false)}
              >
                <User className="inline-block mr-2" size={16} />
                Profile
              </NavLink>
              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  handleLogout();
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[rgb(51,52,68)]"
              >
                <LogOut className="inline-block mr-2" size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-[#332] p-4 overflow-y-auto">
          <nav>
            <ul className="space-y-2">
              <li>
                <NavItem to="/dashboard" icon={<Home className="mr-2" />}>
                  Dashboard
                </NavItem>
              </li>
              <li>
                <NavItem
                  to="/dashboard/transactions"
                  icon={<DollarSign className="mr-2" />}
                >
                  Transactions
                </NavItem>
              </li>
              <li>
                <NavItem
                  to="/dashboard/budget"
                  icon={<PieChart className="mr-2" />}
                >
                  Budget
                </NavItem>
              </li>
              <li>
                <NavItem
                  to="/dashboard/goals"
                  icon={<Target className="mr-2" />}
                >
                  Goals
                </NavItem>
              </li>
              <li>
                <NavItem
                  to="/dashboard/settings"
                  icon={<Settings className="mr-2" />}
                >
                  Settings
                </NavItem>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
