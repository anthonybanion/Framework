import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          
        </Routes>
      </Router>
     
    </>
  )
}

export default App
