import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

interface HeaderProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
  handleLogout,
}) => {
  return (
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
              to="/profile"
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
  );
};

export default Header;