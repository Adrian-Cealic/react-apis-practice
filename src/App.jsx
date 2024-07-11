import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
//pages
import Weather from './pages/Weather'
import Explore from './pages/Explore'
import Resaturants from './pages/Resaturants'
import Hotels from './pages/Hotels'
import Events from './pages/Events'


const App = () => {
  useEffect(() => {
    document.title = 'Travel App'
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Weather />}></Route>
          <Route path='/explore' element={<Explore />}></Route>
          <Route path='/eat' element={<Resaturants />}></Route>
          <Route path='/hotels' element={<Hotels />}></Route>
          <Route path='/events' element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
