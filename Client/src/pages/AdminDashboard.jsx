import React, { useState } from 'react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('mcq')

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab('mcq')}
              className={`w-full text-left px-3 py-2 rounded ${
                activeTab === 'mcq' ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`}
            >
              Add MCQ
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab('coding')}
              className={`w-full text-left px-3 py-2 rounded ${
                activeTab === 'coding' ? 'bg-purple-500' : 'hover:bg-gray-700'
              }`}
            >
              Add Coding Question
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab('results')}
              className={`w-full text-left px-3 py-2 rounded ${
                activeTab === 'results' ? 'bg-green-500' : 'hover:bg-gray-700'
              }`}
            >
              View Results
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">

        {/* ADD MCQ */}
        {activeTab === 'mcq' && (
          <div className="bg-white p-6 rounded shadow max-w-xl">
            <h2 className="text-xl font-bold mb-4">Add MCQ Question</h2>

            <input placeholder="Question" className="w-full mb-3 p-2 border rounded" />
            <input placeholder="Option 1" className="w-full mb-2 p-2 border rounded" />
            <input placeholder="Option 2" className="w-full mb-2 p-2 border rounded" />
            <input placeholder="Option 3" className="w-full mb-2 p-2 border rounded" />
            <input placeholder="Option 4" className="w-full mb-2 p-2 border rounded" />
            <input placeholder="Correct Answer" className="w-full mb-3 p-2 border rounded" />

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Question
            </button>
          </div>
        )}

        {/* ADD CODING */}
        {activeTab === 'coding' && (
          <div className="bg-white p-6 rounded shadow max-w-xl">
            <h2 className="text-xl font-bold mb-4">Add Coding Question</h2>

            <input placeholder="Title" className="w-full mb-3 p-2 border rounded" />

            <textarea
              placeholder="Problem Description"
              className="w-full mb-3 p-2 border rounded"
            />

            <input placeholder="Sample Input" className="w-full mb-2 p-2 border rounded" />
            <input placeholder="Sample Output" className="w-full mb-3 p-2 border rounded" />

            <button className="bg-purple-500 text-white px-4 py-2 rounded">
              Save Coding Question
            </button>
          </div>
        )}

        {/* RESULTS */}
        {activeTab === 'results' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Student Results</h2>

            <table className="w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">MCQ Score</th>
                  <th className="p-2 border">Coding Score</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-2 border">Rahul</td>
                  <td className="p-2 border">8/10</td>
                  <td className="p-2 border">2/3</td>
                </tr>

                <tr>
                  <td className="p-2 border">Anjali</td>
                  <td className="p-2 border">7/10</td>
                  <td className="p-2 border">3/3</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  )
}

export default AdminDashboard