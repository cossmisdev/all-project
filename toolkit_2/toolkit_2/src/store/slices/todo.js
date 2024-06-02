import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: JSON.parse(localStorage.getItem("todo")) || [],
};

export const TodoSlices = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      let res = [...state.todo];
      res.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(res));
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todo));
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlices.actions;
export default TodoSlices.reducer;
