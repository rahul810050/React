import React,{createContext,useContext} from "react";

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: "todo msg",
			complete: false
		}
	],
	addTodo: (todo)=> {},
	updateTodo: (id, todo)=> {},
	deleteTodo: (id)=> {},
	toggleComplete: ()=> {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
	return useContext(TodoContext) 
}