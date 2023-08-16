import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './LandingPage/LandingPage'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
