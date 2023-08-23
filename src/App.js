import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './ContextProvider'

import './App.css'

import LandingPage from './LandingPage/LandingPage'
import Navbar from './Navbar/Navbar'

function App() {
  const [winSize, setWinSize] = useState(window.innerWidth)
  const [scrollY, setScrollY] = useState(window.pageYOffset)
  const [viewRefs, setViewRefs] = useState([])

  const checkWinSize = () => {
    setWinSize(window.innerWidth)
  }
  const checkScrollY = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('resize', checkWinSize)
  }, [winSize])
  useEffect(() => {
    window.addEventListener('scroll', checkScrollY)
  }, [scrollY])

  return (
    <ContextProvider.Provider
      value={{
        winSize,
        scrollY,
      }}
    >
      <div className='App'>
        <Navbar viewRefs={viewRefs} />
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <LandingPage
                  setViewRefs={(refs) => {
                    setViewRefs(() => {
                      return [...refs]
                    })
                  }}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider.Provider>
  )
}

export default App
