import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil'
import './App.css'
import { todoAtomFamily } from './atoms/selector'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={1}/>
    </RecoilRoot>
  )
}


function Todo({id}){
  // const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id))
  const todo = useRecoilValueLoadable(todoAtomFamily(id))  // this is the way to prevent the site fromm crash while it  is getting error from Backend

  console.log(todo.state);
  if(todo.state === "loading"){
    return <div>
      loading...
    </div>
  } else if(todo.state === "hasValue"){
    return <div>
    {todo.contents.title}
    {todo.contents.body}
  </div>
  } else if(todo.state === "hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }
  
}

export default App
