import { useCallback, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*-_=+[]{}~`'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // useRef for textarea
  const passwordRef = useRef(null)

  // Copy to clipboard function
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current.setSelectionRange(0, 4) 
    navigator.clipboard.writeText(password)
  }, [password])

  // Function to clear the password
  const clearPassword = () => {
    setPassword('')
  }

  return (
    <>
      <style>
        {`
          .btn {
            position: relative;
            background-color: #04AA6D;
            border: none;
            font-size: 20px;
            color: #FFFFFF;
            padding: 2px;
            width: 100px;
            text-align: center;
            transition-duration: 0.4s;
            text-decoration: none;
            overflow: hidden;
            cursor: pointer;
            border-radius: 5px;
          }

          .btn::after {
            content: "";
            background: #90EE90;
            display: block;
            position: absolute;
            padding-top: 300%;
            padding-left: 350%;
            margin-left: -20px!important;
            margin-top: -120%;
            opacity: 0;
            transition: all 0.8s;
          }

          .btn:active::after {
            padding: 0;
            margin: 0;
            opacity: 1;
            transition: 0s;
          }
        `}
      </style>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-5 m-2 text-white bg-purple-700'>
        <h1 className='text-center text-2xl my-4'>Password Generator</h1>
        <div className='my-2 flex gap-x-4 justify-between'>
          <label className='block text-white'>Length: {length}</label>
          <input 
            type='range' 
            value={length}
            max={100}
            min={8} 
            onChange={(e) => setLength(Number(e.target.value))} 
            className='w-72 p-2 rounded text-black text-xl' 
          />
        </div>
        <div className='my-2'>
          <label className='block text-white'>
            <input 
              type='checkbox' 
              checked={numberAllowed} 
              onChange={() => setNumberAllowed((prev) => !prev)}
              className='mr-2' 
            />
            Include Numbers
          </label>
        </div>
        <div className='my-2'>
          <label className='block text-white'>
            <input 
              type='checkbox' 
              checked={charAllowed} 
              onChange={() => setCharAllowed((prev) => !prev)}
              className='mr-2' 
            />
            Include Special Characters
          </label>
        </div>
        <div className='my-4 flex justify-center'>
          <button 
            onClick={passwordGenerator} 
            className='w-64 bg-green-500 text-white p-2 rounded mb-2'
          >
            Generate Password
          </button>
        </div>
        <div className='my-4 flex'>
          <textarea 
            readOnly 
            value={password} 
            ref={passwordRef}
            className='w-72 mx-2 h-10 p-2 rounded bg-gray-800 text-white' 
          />
          <button 
            onClick={copyToClipboard}
            className='btn'
          >
            Copy
          </button>
        </div>
        <div className='my-4 flex justify-center'>
          <button 
            onClick={clearPassword} 
            className='w-56 bg-gray-500 text-white p-2 rounded mb-4'
          >
            Clear
          </button>
        </div>
      </div>
    </>
  )
}

export default App
