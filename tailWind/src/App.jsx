import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function App() {
  const number = 6;
  const reference = useRef(Array(number).fill(0));
  return (
    <div className='bg-slate-800 h-screen items-center flex justify-center'>
      <h1 className='block'>Enter OTP</h1>
      {Array(number).fill(1).map((x, index)=> <InputOtpBox reference={e=> reference.current[index] = e} key={index} 
      onDone={() => 
      {
        if(index + 1 >= number){
          return
        } else{
          reference.current[index + 1]?.focus();
        }
      }
      }

      goBack={()=> {
        if(index == 0){
          return
        } else{
          reference.current[index - 1]?.focus();
        }
      }}
      />)}
    </div>
  )
}









function InputOtpBox({reference, onDone, goBack}){
  const [inputValue, setInputValue] = useState("");

  return <div>
    <input 
    className='text-black w-8 h-6 border-none p-2 rounded-2xl bg-blue-600 mx-2'
    maxLength={1}
    value={inputValue}  
    ref={reference} 
    type="text" 
    onKeyUp={(e)=> {
      if(e.key === "Backspace"){
        goBack();
      }
    }} 
    onChange={(e)=> {
      const val = e.target.value;
      // console.log(val)
      // if(val.match(/^\d$/)){
      if(val ===  '1' || val ===  '2' || val ===  '3' || val ===  '4' || val ===  '5' || val ===  '6' || val ===  '7' || val ===  '8' || val ===  '9' || val ===  '0'){
        setInputValue(val);
        onDone()
      } else{
        setInputValue(""); // clear the invalid input
      }
    }}
    />
  </div>
}

export default App