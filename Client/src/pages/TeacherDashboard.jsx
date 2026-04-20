import React, { useState } from 'react'

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('quiz')
  const [questions, setQuestions] = useState([])
  const [form, setForm] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: ''
  })
  const [editIndex, setEditIndex] = useState(null)

  // Handle Input
  const handleChange = (e, index = null) => {
    if (index !== null) {
      const newOptions = [...form.options]
      newOptions[index] = e.target.value
      setForm({ ...form, options: newOptions })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  // Add / Update Question
  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...questions]
      updated[editIndex] = form
      setQuestions(updated)
      setEditIndex(null)
    } else {
      setQuestions([...questions, form])
    }

    setForm({
      question: '',
      options: ['', '', '', ''],
      answer: ''
    })
  }

  // Edit Question
  const handleEdit = (index) => {
    setForm(questions[index])
    setEditIndex(index)
    setActiveTab('add')
  }

  // Delete Question
  const handleDelete = (index) => {
    const updated = questions.filter((_, i) => i !== index)
    setQuestions(updated)
  }

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Teacher Panel</h2>

        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab('quiz')}
              className="w-full text-left hover:bg-indigo-700 px-3 py-2 rounded"
            >
              Create Quiz
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab('add')}
              className="w-full text-left hover:bg-indigo-700 px-3 py-2 rounded"
            >
              Add Question
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab('list')}
              className="w-full text-left hover:bg-indigo-700 px-3 py-2 rounded"
            >
              Question List
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">

        {/* CREATE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="bg-white p-6 rounded shadow max-w-md">
            <h2 className="text-xl font-bold mb-4">Create Quiz</h2>

            <input
              placeholder="Quiz Title"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="number"
              placeholder="Duration (minutes)"
              className="w-full mb-3 p-2 border rounded"
            />

            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Create Quiz
            </button>
          </div>
        )}

        {/* ADD / UPDATE QUESTION */}
        {activeTab === 'add' && (
          <div className="bg-white p-6 rounded shadow max-w-xl">
            <h2 className="text-xl font-bold mb-4">
              {editIndex !== null ? "Update Question" : "Add Question"}
            </h2>

            <input
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Enter Question"
              className="w-full mb-3 p-2 border rounded"
            />

            {form.options.map((opt, i) => (
              <input
                key={i}
                value={opt}
                onChange={(e) => handleChange(e, i)}
                placeholder={`Option ${i + 1}`}
                className="w-full mb-2 p-2 border rounded"
              />
            ))}

            <input
              name="answer"
              value={form.answer}
              onChange={handleChange}
              placeholder="Correct Answer"
              className="w-full mb-3 p-2 border rounded"
            />

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        )}

        {/* QUESTION LIST */}
        {activeTab === 'list' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Question List</h2>

            {questions.length === 0 ? (
              <p>No questions added yet</p>
            ) : (
              questions.map((q, index) => (
                <div key={index} className="border p-3 mb-3 rounded">
                  <p className="font-semibold">{q.question}</p>
                  <ul className="text-sm ml-4">
                    {q.options.map((opt, i) => (
                      <li key={i}>- {opt}</li>
                    ))}
                  </ul>
                  <p className="text-green-600">
                    Answer: {q.answer}
                  </p>

                  <div className="mt-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default TeacherDashboard