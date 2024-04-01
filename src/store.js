import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const todosSlice = createSlice({
  name: "todos",
  initialState: todos,
  reducers: {
    addTodo: {
      prepare(title, description) {
        return {
          payload: { title, description },
        };
      },
      reducer(state, action) {
        state.push({
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
        });
      },
    },

    deleteTodo: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);
      const newState = [...state];
      newState.splice(index, 1);
      return newState;
    },
    completeTodo: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);
      const newState = [...state];
      newState[index] = {
        ...newState[index],
        completed: !newState[index].completed,
      };
      return newState;
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    selectAll: () => {
      return "all";
    },
    selectDone: () => {
      return "done";
    },
    selectToDo: () => {
      return "toDo";
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;
export const { selectAll, selectDone, selectToDo } = filterSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

export default store;
