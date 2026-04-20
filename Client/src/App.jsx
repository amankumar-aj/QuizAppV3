import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import StudentDashboard from './pages/StudentDashboard'
import Exam from './pages/Exam'
import CodingTest from './components/CodingTest'
import Calculator from './components/Calculator'
import AdminDashboard from './pages/AdminDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import Instructions from './components/Instructions'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<StudentDashboard/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/teacher" element={<TeacherDashboard/>}/>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/exam" element={<Exam/>} />
        <Route path="/coding" element={<CodingTest/>} />
        <Route path="/calculator" element={<Calculator/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
