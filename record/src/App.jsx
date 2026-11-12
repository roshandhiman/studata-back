import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Student Data Record</h1>
      <div className='Search'>
        <input type='number' placeholder='Enter Student ID'/>
        <button>Search</button>
      </div>
      <div className='Details'></div>
    </>
  )
}

export default App
