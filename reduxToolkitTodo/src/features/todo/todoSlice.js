import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello world' }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { // An object containing reducer functions that define how the state is updated.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text // payload is the todo text
      };
      state.todos.push(todo); // updating the state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // payload contains id and new text
      state.todos = state.todos.map(todo => 
        todo.id === id ? { ...todo, text } : todo
      );
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // it will be used for components work

export default todoSlice.reducer; // for store
