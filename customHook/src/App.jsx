import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch';
import usePrev from './hooks/usePrev';

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(c=> c+1);
  }
  return [
    count,
    increaseCount
  ]
}

// THIS APP FUNCTION IS TO USE THE useFetch HOOK
// function App() {
//   // const [count, setCount] = useState(0)
//   const [count, increaseCount] = useCounter();
//   const {data, loading} = useFetch(`https://jsonplaceholder.typicode.com/todos/${count}`)

//   // const [post, setPost] = useState({});

//   if(loading){
//     return <div>
//       Loading...
//     </div>
//   }

//   // async function getPost(){
//   //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//   //   const json = await response.json();
//   //   console.log(json)

//   //   setPost(json);
//   // }

//   // useEffect(()=> {
//   //   getPost();
//   // }, [setPost, count])


//   return (
//     <>
//       <div>
//         {JSON.stringify(data)}
//       </div>
//       {/* {post.title} */}
//       <Counter count={count} increaseCount={increaseCount}/>
//     </>
//   )
// }


// function Counter({count, increaseCount}){
  
//   return <div>
//     <button onClick={increaseCount}>Increase {count}</button>
//   </div>
// }





// THIS APP FUNCTION IS TO USE THE usePrev HOOK

// function App(){
//   const [value, setValue] = useState(0)
//   const previous = usePrev(value)


//   return(
//     <div>
//       <p>{value}</p>
//       <button onClick={()=> setValue(c=> c+1)}>Increase</button>
//       <p>The previous value is: {previous}</p>
//     </div>
//   )
// }





// DEBOUNCING IN REACT

function App(){
  const [inputVal, setInputVal] = useState("")

  // async function callBackend(){
  //   const data = await fetch('api.amazon.in/search/value');
  // }

  const debounce = useDebounce(inputVal, 200);

  useEffect(()=> {
    console.log('backend request sent')
  }, [debounce])

  function useDebounce(value, delay){
    const [debouncedValue, setDebouncedValue] = useState();
  
    useEffect(()=> {
      const interval = setTimeout(() => {
        setDebouncedValue(value)
      }, delay);
  
      return ()=> {
        clearTimeout(interval)
      }
    }, [value, delay])
  
    return debouncedValue
  }

  function change(e){
    setInputVal(e.target.value)
  }

  return <div>
    <input type="text" onChange={change} />
  </div>
}



export default App