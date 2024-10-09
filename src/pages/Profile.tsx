import React, { useState, useEffect } from 'react'
import { User, Mail, Lock, ArrowLeft } from 'lucide-react'
import { getUserProfile, updateUserProfile } from '../utils/pocketbase'
import { Link } from 'react-router-dom'

const Profile: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getUserProfile()
      setName(profile.name)
      setEmail(profile.email)
    }
    fetchProfile()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateUserProfile({ name, email, password })
      alert('Profile updated successfully')
    } catch (error) {
      console.error('Profile update error:', error)
      alert('Failed to update profile. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(20,20,20)] flex flex-col">
      <header className="bg-[rgb(20,20,20)] border-b border-[#332] flex items-center p-4">
        <Link to="/dashboard" className="text-dark-primary hover:text-dark-primary-hover">
          <ArrowLeft className="inline-block mr-2" size={20} />
          Back to Dashboard
        </Link>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-[rgb(51,52,68)] p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-dark-text">Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-dark-text font-bold mb-2">
                Name
              </label>
              <div className="flex items-center">
                <User className="text-dark-text mr-2" />
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-[rgb(41,42,58)] text-dark-text border border-[#332] rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-dark-text font-bold mb-2">
                Email
              </label>
              <div className="flex items-center">
                <Mail className="text-dark-text mr-2" />
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-[rgb(41,42,58)] text-dark-text border border-[#332] rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-dark-text font-bold mb-2">
                New Password (leave blank to keep current)
              </label>
              <div className="flex items-center">
                <Lock className="text-dark-text mr-2" />
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 bg-[rgb(41,42,58)] text-dark-text border border-[#332] rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-dark-primary text-dark-bg py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile