// import { createContext, useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const BulbContext = createContext();// context api 


// // this is to hide the BulbContext in one function
// function BulbProvider({children}){
//   const [bulbOn, setBulbOn] = useState(true)
//   return <div>
//     <BulbContext.Provider value={{    // we have to wrap up the components which is going to use these states
//         bulbOn: bulbOn,
//         setBulbOn: setBulbOn
//       }}>
//       {children}
//     </BulbContext.Provider>
//   </div>
// }

// function App() {
  

//   return (
//     <>
//       <BulbProvider>
//         <LightUp/> 
//       </BulbProvider>
//     </>
//   )
// }

// function LightUp(){

//   return <div>
//     <BulbOnComponent />
//     <br />
//     <ToggleSwitch />
//   </div>
// }


// function BulbOnComponent(){
//   const {bulbOn} = useContext(BulbContext) // this is how we can access the  variables 
//   return <>
//     { bulbOn ? "Bulb On": "Bulb Off"}
//   </>
// }

// function ToggleSwitch(){
//   const {setBulbOn} = useContext(BulbContext) // this is how we  can use the variables
//   return <>
//     <button onClick={()=> setBulbOn( currentState=> !currentState )}>Toggle the switch</button>
//   </>
// }

// export default App




// RECOIL IN REACTJS



import React from 'react';
import { atom, RecoilRoot, useRecoilState, useRecoilValue, selector } from 'recoil';

const bulbState = atom({
  key: 'bulbState',
  default: true,
});

const bulbSelector = selector({
  key: 'bulbSelector',
  get: ({ get }) => get(bulbState),
});

function App() {
  return (
    <RecoilRoot>
      <LightUp />
    </RecoilRoot>
  );
}

function LightUp() {
  return (
    <div>
      <BulbOnComponent />
      <br />
      <ToggleSwitch />
    </div>
  );
}

function BulbOnComponent() {
  const bulbOn = useRecoilValue(bulbSelector); // `useRecoilValue` returns the raw value
  return <div>{bulbOn ? 'Bulb On' : 'Bulb Off'}</div>;
}

function ToggleSwitch() {
  const [bulbOn, setBulbOn] = useRecoilState(bulbState); // `useRecoilState` returns a tuple

  function toggleTheState() {
    setBulbOn((prev) => !prev);
  }

  return <button onClick={toggleTheState}>Toggle</button>;
}

export default App;