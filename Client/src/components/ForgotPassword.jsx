import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Reset Password
        </button>

        <p className="text-sm text-center mt-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default ForgotPassword