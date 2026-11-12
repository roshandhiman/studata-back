import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [studentId,setStudentId]=useState('')
  const [student,setStudent]=useState(null)
  const [error,setError]=useState('')
  async function searchstudent(){
    try{
      const resp=await fetch(
        `http://127.0.0.1:8000/students/${studentId}`
      )
      if (!resp.ok){
        throw new Error("student not found")
      }
      const data=await resp.json()
      setStudent(data)
      setError('')
    }catch(err){
      setStudent(null)
      setError(err.message)
    }
  }

  return (
    <>
      <h1>Student Data Record</h1>
      <div className='Search'>
        <input type='number' placeholder='Enter Student ID' value={studentId}

  onChange={(e) => setStudentId(e.target.value)}/>
        <button onClick={searchstudent}>Search</button>
      </div>
      <div className='Details'>
        {student && (
          <>
          <h2>{student.name}</h2>
          <p>{student.id}</p>
          <p>{student.course}</p>
          <p>{student.age}</p>
          </>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  )
}

export default App
