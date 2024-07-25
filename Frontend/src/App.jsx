import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Hero from './components/Hero'
import Inventory from './components/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/inventory' element={<Inventory/>} />
      </Routes>
    </>
  )
}

export default App
