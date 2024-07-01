import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    username: 'cocane',
    email: 'cocane@gmail.com'
  }

  const arr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-yellow-500 text-black p-5 rounded-xl shadow-2xl mb-5'>Tailwind CSS</h1>
      {/* <Card channel ='codewithRahul' object= {myObj}/> */}
      <Card channel ='codewithRahul' btn="click me"/>
      <Card channel ='codewithRahul' btn="add me"/>
      
    </>
  )
}

export default App
