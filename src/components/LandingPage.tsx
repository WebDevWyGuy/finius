import React from 'react'
import { Link } from 'react-router-dom'
import { Wallet } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-bg text-dark-text">
      <Wallet size={64} className="mb-8 text-dark-primary" />
      <h1 className="text-5xl font-bold mb-4">Personal Finance App</h1>
      <p className="text-xl mb-8">Take control of your finances and achieve your goals</p>
      <div className="space-x-4">
        <Link to="/auth" className="bg-dark-primary text-dark-bg px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Get Started
        </Link>
        <Link to="/auth" className="border-2 border-dark-primary px-6 py-3 rounded-full font-semibold hover:bg-dark-primary hover:text-dark-bg transition duration-300">
          Login
        </Link>
      </div>
    </div>
  )
}

export default LandingPage