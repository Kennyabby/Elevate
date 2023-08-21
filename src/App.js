import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './ContextProvider'

import './App.css'

import LandingPage from './LandingPage/LandingPage'
import Navbar from './Navbar/Navbar'

function App() {
  const [winSize, setWinSize] = useState(window.innerWidth)

  const checkWinSize = () => {
    setWinSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkWinSize)
  }, [winSize])

  return (
    <ContextProvider.Provider
      value={{
        winSize: winSize,
      }}
    >
      <div className='App'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider.Provider>
  )
}

export default App
