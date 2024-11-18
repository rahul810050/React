// import { useState } from 'react'
// import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

// import './App.css'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
        
//         <Routes>
//           <Route path='/' element={<Layout/>}>
//             <Route path='class11' element={<Class11/>}/> 
//             <Route path='class12' element={<Class12/>}/> 
//             <Route path='/' element={<Landing/>}/> 
//             <Route path='*' element={<ErrorPage/>}/> 
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function ErrorPage(){
//   return (
//     <div>
//       sorry content not found
//     </div>
//   )
// }

// function Layout(){
//   return <div>
//     <Link to={'/'}>Landing Page</Link>
//         |
//     <Link to={'/class11'}>Class11</Link>
//     |
//     <Link to={'/class12'}>Class12</Link>
//     <div>
//       <Outlet />
//     </div>

//   </div>
// }

// function Class11(){
//   return (
//     <div>
//       this is class 11
//     </div>
//   )
// }

// function Class12(){
//   const navigate = useNavigate()
//   function redirectLanding(){
//     navigate("/")
//   }
//   return (
//     <div>
//       this is class 12
//       <button onClick={redirectLanding}>go back to the landing page</button>
//     </div>
//   )
// }

// function Landing(){
  
//   return (
//     <div>
//       this is landing page
//     </div>
//   )
// }

// export default App



import React, { useRef, useState } from 'react'

function App() {
  
  return (
    <>
      <UseRefLearning/>
      <Check/>
    </>
  );
}

export default App


function UseRefLearning(){

  const inputRef = useRef(null)

  function useReference(){
    inputRef.current.focus()
  }

  return <div>
    <input ref={inputRef} type="text" />
    <button onClick={useReference}>Submit</button>
  </div>
}

function Check(){
  const [count, setCount] = useState(0);

  const  timer = useRef();

  function stopClock(){
    clearInterval(timer.current)
  }

  function startClock(){
    let value = setInterval(function(){
      setCount(c=> c+1)
    }, 1000)
    timer.current = value;
  }


  return <div>
    <h1>{count}</h1>
    <button onClick={stopClock}>stop</button>
    <button onClick={startClock}>start</button>
  </div>
}