import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Programs from './components/Programs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Team/>
    <Programs/>
    {/* <Person/> */}
    </>
  )
}

export default App
