import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import './App.css'
import { notificationAtom, totalNotificationSelector } from './store/atom/couter'

// function App() {

//   return (
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>
//   )
// }


// function Counter(){
//   return(
//     <div>
//       <Button/>
//       <br />
//       <CountValue/>
//       <IsEven/>
//     </div>
//   )
// }

// function CountValue(){
//   const count = useRecoilValue(CounterAtom)
  
//   return(
//     <div>
//       {count}
//     </div>
//   )
// }

// function Button(){
//   const setCount = useSetRecoilState(CounterAtom)

//   function increase(){
//     setCount(c => c + 2)
//   }
//   function decrease(){
//     setCount(c => c - 1)
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }


// function IsEven(){
//   const count = useRecoilValue(CounterSelector);

//   return <div>
//     {count ? "Even":  "Odd"}
//   </div>
// }






// this is for Asynchronous data queries

function App(){

  return <RecoilRoot>
    <Notification/>
  </RecoilRoot>
}

function Notification(){
  const notification = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector)
  return <div>
    <button>{notification.userId}</button>
    <button>{notification.id}</button>
    <button>{notification.title}</button>
    <button>{notification.body}</button>
    <button>{totalNotification}</button>
  </div>
}



export default App
