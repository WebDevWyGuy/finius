import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PieChart, DollarSign, Target, Settings } from 'lucide-react';

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

const Sidebar: React.FC = () => {
  return (
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
  );
};

export default Sidebar;