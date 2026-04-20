import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/ABES_LOGO.jpeg'

const Login = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg w-100">

      {/* Logo + Org Name */}
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt="Logo" className="w-30 h-30 mb-2" />
        <h2 className="text-xl font-bold text-gray-700">
          ABES Engineering College
        </h2>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-center">Sign In</h3>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded-lg"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-2 p-2 border rounded-lg"
      />

      {/* Forgot Password */}
      <div className="text-right mb-4">
        <Link to="/forgot" className="text-sm text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </div>

      {/* Button */}
      <button onClick={() => navigate('/admin')} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Sign In
      </button>

      {/* Register Link */}
      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>

    </div>
  )
}

export default Login