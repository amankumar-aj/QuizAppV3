import React, { useState } from 'react'
import axios from 'axios'

const CodingTest = () => {

  // 🔥 Starter Code Templates
  const starterCode = {
    cpp: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}`,

    c: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}`,

    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + b);
    }
}`,

    python: `a, b = map(int, input().split())
print(a + b)`
  }

  const [language, setLanguage] = useState("cpp")
  const [code, setCode] = useState(starterCode["cpp"])
  const [output, setOutput] = useState([])
  const [loading, setLoading] = useState(false)

  // Language mapping for Glot
  const langMap = {
    cpp: "cpp",
    c: "c",
    java: "java",
    python: "python"
  }

  // File names per language
  const fileNames = {
    cpp: "main.cpp",
    c: "main.c",
    java: "Main.java",
    python: "main.py"
  }

  const testCases = [
    { input: "2 3", expected: "5" },
    { input: "10 5", expected: "15" }
  ]

  const TOKEN = "YOUR_GLOT_TOKEN" // 🔴 Replace this

  // ✅ Glot API Call
  const runCode = async (input) => {
    try {
      const response = await axios.post(
        `https://glot.io/api/run/${langMap[language]}/latest`,
        {
          files: [
            {
              name: fileNames[language],
              content: code
            }
          ],
          stdin: input
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${TOKEN}`
          }
        }
      )

      const result =
        response.data.stdout ||
        response.data.stderr ||
        response.data.error ||
        "No Output"

      return result.trim()

    } catch (err) {
      console.error(err.response?.data || err.message)
      return "Execution Error"
    }
  }

  // Run all test cases
  const handleRun = async () => {
    setLoading(true)
    const results = []

    for (let tc of testCases) {
      const result = await runCode(tc.input)

      results.push({
        ...tc,
        result,
        pass: result === tc.expected
      })
    }

    setOutput(results)
    setLoading(false)
  }

  return (
    <div className="flex h-screen">

      {/* LEFT PANEL */}
      <div className="w-1/2 p-6 bg-gray-100">
        <h1 className="text-xl font-bold mb-3">Coding Problem</h1>
        <p className="mb-4">
          Write a program to take two numbers as input and print their sum.
        </p>

        <h3 className="font-semibold">Sample Test Cases:</h3>
        <ul className="text-sm mt-2">
          {testCases.map((tc, i) => (
            <li key={i}>
              Input: {tc.input} → Output: {tc.expected}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 p-6 flex flex-col">

        {/* Language Select */}
        <select
          value={language}
          onChange={(e) => {
            const selectedLang = e.target.value

            // Prevent accidental code loss
            if (code.trim() !== starterCode[language].trim()) {
              const confirmChange = window.confirm(
                "Your current code will be lost. Continue?"
              )
              if (!confirmChange) return
            }

            setLanguage(selectedLang)
            setCode(starterCode[selectedLang])
          }}
          className="mb-3 p-2 border rounded"
        >
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>

        {/* Code Editor */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 border p-3 rounded font-mono"
        />

        {/* Run Button */}
        <button
          onClick={handleRun}
          className="bg-blue-500 text-white p-2 mt-3 rounded"
        >
          {loading ? "Running..." : "Run Code"}
        </button>

        {/* Output Panel */}
        <div className="mt-4 bg-black text-white p-3 h-48 overflow-auto rounded">
          {output.length === 0 ? (
            <p>No output yet</p>
          ) : (
            output.map((res, i) => (
              <div key={i} className="mb-3 border-b pb-2">
                <p>Test Case {i + 1}</p>
                <p>Input: {res.input}</p>
                <p>Expected: {res.expected}</p>
                <p>Output: {res.result}</p>
                <p className={res.pass ? "text-green-400" : "text-red-400"}>
                  {res.pass ? "✅ Passed" : "❌ Failed"}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default CodingTest