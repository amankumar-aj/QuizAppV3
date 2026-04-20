import React, { useState, useEffect } from 'react'
import Calculator from '../components/Calculator'

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "React is a ___?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library"
  },
  {
    question: "5 * 3 = ?",
    options: ["10", "15", "20", "25"],
    answer: "15"
  }
]

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showCalc, setShowCalc] = useState(false)

  // Timer
  useEffect(() => {
    if (timeLeft === 0) {
      setSubmitted(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // Save Answer
  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQ]: option })
  }

  // Score
  const score = questions.reduce((acc, q, index) => {
    return answers[index] === q.answer ? acc + 1 : acc
  }, 0)

  // Result Screen
  if (submitted) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Exam Submitted</h1>
        <p className="text-xl mt-4">
          Score: {score} / {questions.length}
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-screen">

      {/* LEFT: Question Area */}
      <div className="flex-1 p-6 bg-gray-100">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Online Test</h2>

          <div className="flex items-center gap-3">
            <p className="text-red-500 font-bold">
              Time: {timeLeft}s
            </p>

            {/* Calculator Toggle */}
            <button
              onClick={() => setShowCalc(!showCalc)}
              className="bg-gray-800 text-white px-3 py-1 rounded"
            >
              🧮
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="mb-4 font-semibold">
            Q{currentQ + 1}. {questions[currentQ].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className={`w-full text-left p-2 border rounded-lg ${
                  answers[currentQ] === opt
                    ? 'bg-blue-200'
                    : 'hover:bg-gray-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Prev
            </button>

            {currentQ < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQ(currentQ + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Question Palette */}
      <div className="w-64 bg-white p-4 border-l overflow-y-auto">
        <h3 className="font-bold mb-4">Questions</h3>

        <div className="grid grid-cols-4 gap-3">
          {questions.map((_, index) => {
            const attempted = answers[index]

            return (
              <button
                key={index}
                onClick={() => setCurrentQ(index)}
                className={`w-10 h-10 rounded ${
                  attempted
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {index + 1}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 text-sm">
          <p className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 inline-block"></span>
            Attempted
          </p>
          <p className="flex items-center gap-2 mt-2">
            <span className="w-4 h-4 bg-red-500 inline-block"></span>
            Not Attempted
          </p>
        </div>
      </div>

      {/* FLOATING CALCULATOR */}
      {showCalc && (
        <div className="fixed bottom-5 right-5 z-50">
          <Calculator />
        </div>
      )}

    </div>
  )
}

export default Exam