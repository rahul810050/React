import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addCount = ()=>{
    if(counter <= 19){
      // counter++
      setCounter(counter + 1)
    }
  }
  const removeCount = ()=>{
    if(counter >=1){
      // counter--
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>Counter Update</h2>
      <button onClick={addCount}>Add count</button>
      <button onClick={removeCount}>Remove count</button>
      <p>Counter value: {counter}</p>
    </>
  )
}

export default App
