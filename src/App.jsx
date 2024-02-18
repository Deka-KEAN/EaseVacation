import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { BookFlight } from './pages/BookFlight'


function App() {


  return (
    <div className="w-screen">
      <h1 className="left-0 top-0 p-4 font-extrabold">Ease My Vacation</h1>
      <hr className="h-2 bg-white mt-5"></hr>
      <div className="h-fit flex items-center justify-center">
        
        <Router>
          <Routes>
            <Route path="/*" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/book-flight" element={<BookFlight/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
