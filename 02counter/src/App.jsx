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
      /*setCounter(counter + 1)
      setCounter(counter + 1)  // this is not the right way to this...because fiber takes the banch of instruction send it to server for work done but before that fiber checks all the instruction of work if it does the same thing then fiber takes only a single work of instruction and rest are ignored
      setCounter(counter + 1)*/

      // this is the way to do same work again and again.. because we are taking only the previous state of rather taking banch of it 
      // setCounter((prevCounter) => {return prevCounter + 1}) // another syntax to do it
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
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
