// import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <Link to={'/'}>Study</Link>
//       |
//       <Link to={'/class11'}>class11</Link>
//       |
//       <Link to={'/class12'}>class12</Link>
//         <Routes>
//           <Route path='/' element={<Layout/>}>
//             <Route path='/' element={<Landing />}/>
//             <Route path='/class11' element={<Class11 />}/>
//             <Route path='/class12' element={<Class12 />}/>
//             <Route path='*' element={<NoPage />}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout(){
//   return (
//     <div>
//       <Header/>
//         <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

// function Header(){
//   return (
//     <div>
//       this is header
//     </div>
//   )
// }

// function Footer(){
//   return (
//     <div>
//       this is footer
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

// function Class11(){
//   return (
//     <div>
//       this is class 11
//     </div>
//   )
// }

// function Class12(){
//   const navigate = useNavigate()
//   function redirectUser(){
//     navigate('/')
//   }
//   return (
//     <div>
//       this is class 12
//       <button onClick={redirectUser}>go to landing page</button>
//     </div>
//   )
// }

// function NoPage(){
//   return (
//     <div>
//       sorry page not found
//     </div>
//   )
// }

// export default App


// useRef -> it gives to reference to a DOM element
// import React, { useRef } from 'react'

// function App() {
//   const inputRef = useRef();

//   function getRef(){
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder='enter your name' />
//       <input type="text" placeholder='enter your name' />
//       <button onClick={getRef}>submit</button>
//     </div>
//   )
// }

// export default App


// useRef -> it gives a reference of a value, such that if you change the value the component does not RE-RENDER
// lets take a clock to understand this
import React, {useState, useRef } from 'react'

function App() {
  let timer = 0; // if we use this it will reinitialize the timer variable = 0 in each RE-RENDER
  const [time, setTime] = useState(0); // it works fine but it RE-RENDER one more time extra
  const timerRef = useRef(); // if we use this then this is the optimal way to handle this thing it does not RE-RENDER when the value of it gets changed 


  const [clock, setClock] = useState(1);

  function Start(){
    let value = setInterval(function(){
      setClock(prev => prev+1)
    }, 1000)
    // setTime(value);
    timerRef.current = value
  }

  function Stop(){
    clearInterval(timerRef.current);
  }

  return (
    <div>
      {clock}
      <br />
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
  )
}

export default App