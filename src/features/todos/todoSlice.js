import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const slice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { id: uuid(), value: "Keep learning" },
      { id: uuid(), value: "Have a coffee" },
      { id: uuid(), value: "Climb a mountain", done: true },
      { id: uuid(), value: "Read a book" },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.value.push(action.payload);
    },
    removeToDo: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    editToDo: (state, action) => {
      state.value = state.value.map((el) => {
        el =
          el.id === action.payload?.id
            ? { ...el, value: action.payload.value }
            : { ...el };
        return el;
      });
    },
  },
});

export const { addToDo, removeToDo, editToDo } = slice.actions;

export const selectTodo = (state) => state.todos.value;

export default slice.reducer;
