
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import viteLogo from '/vite.svg'
import { useState } from 'react'


function App() {

  return (
    <div>
      <Header />
      <Outlet />
      
    </div>
  )
}

export default App
