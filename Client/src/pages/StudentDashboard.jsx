import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('test')
  const navigate = useNavigate()

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Student Panel</h2>

        <ul className="space-y-4">

          <li>
            <button
              onClick={() => setActiveTab('test')}
              className={`w-full text-left px-3 py-2 rounded ${
                activeTab === 'test' ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`}
            >
              MCQ Tests
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab('result')}
              className={`w-full text-left px-3 py-2 rounded ${
                activeTab === 'result' ? 'bg-green-500' : 'hover:bg-gray-700'
              }`}
            >
              Results
            </button>
          </li>

          {/* NEW CODING TEST */}
          <li>
            <button
              onClick={() => navigate('/coding')}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              Coding Test 
            </button>
          </li>

        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">

        {/* MCQ TEST */}
        {activeTab === 'test' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">MCQ Tests</h2>

            <button
              onClick={() => navigate('/instructions')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Start MCQ Test
            </button>
          </div>
        )}

        {/* RESULTS */}
        {activeTab === 'result' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <p>Results will be shown here...</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default StudentDashboard