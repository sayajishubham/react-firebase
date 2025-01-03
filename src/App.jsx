import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar'
import Router from './AllRoutes/Router'

function App() {

  return (
    <>
     <Navbar/>
     <Router/>
    </>
  )
}

export default App
