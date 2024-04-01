import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [
      {
        id: 1,
        title: "Complete project proposal for upcoming client meeting",
        description: "check",
        completed: false,
      },
      {
        id: 2,
        title: "Review and respond to emails in inbox.",
        description: "",
        completed: false,
      },
      {
        id: 3,
        title: "Make Presentation for tomorrow",
        description: "",
        completed: true,
      },
    ];

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
    completeTodo: (state, action) => {
      const selectedTodo = state.find((e) => e.id === action.payload);
      selectedTodo.completed = !selectedTodo.completed;
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

export const { addTodo, completeTodo } = todosSlice.actions;
export const { selectAll, selectDone, selectToDo } = filterSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
