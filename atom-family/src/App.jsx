import {RecoilRoot, atomFamily, useRecoilValue, useRecoilState} from 'recoil'
import './App.css'
import { todosAtomFamily } from './store/atoms/atomFamily'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function  Todo({id}){
  const [todo, setTodo] =  useRecoilState(todosAtomFamily(id))

  return <div>
    {todo.id}
    {todo.title}
  </div>
}

export default App
