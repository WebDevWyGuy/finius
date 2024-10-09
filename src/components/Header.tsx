import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { logout } from '../utils/auth'

const Header: React.FC = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-dark-primary">
          FinanceTracker
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/dashboard" className="text-dark-text hover:text-dark-primary">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-dark-text hover:text-dark-primary">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center text-dark-text hover:text-dark-primary"
              >
                <LogOut size={18} className="mr-1" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header