import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    setCompletedTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: true,
          };
        } else {
          return todo;
        }
      });
    },
    setUncompletedTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: false,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const todoActions = todoSlice.actions;
