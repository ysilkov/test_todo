import { createSlice } from "@reduxjs/toolkit";
import { initialStateProps } from "../helper";

const initialState: initialStateProps = {
  todoList: [],
  todo: [],
};

export const Todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todoList.push(action.payload);
    },
    changeStatusTodo(state, action) {
      let todo = state.todoList.find((el) => el.id === action.payload);
      if (todo !== undefined) {
        if (todo.status) {
          todo.status = false;
        } else {
          todo.status = true;
        }
      }
    },
    chooseTodo(state, action) {
      state.todo = state.todoList.filter((el) => el.id === action.payload);
    },
  },
});

export const { createTodo, changeStatusTodo, chooseTodo } = Todo.actions;
export default Todo.reducer;
