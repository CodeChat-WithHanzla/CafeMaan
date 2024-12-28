import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Menu } from './pages/index'

import { Header, Footer } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
