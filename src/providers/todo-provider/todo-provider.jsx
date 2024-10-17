import React from "react";
import { ADD_USER, DELETE_USER, EDIT_USER } from "./todo-types";

export const TodoProviderWrapper = React.createContext();

const initialState = {
  count: 0,
  users: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.value] };
    case DELETE_USER:
      const newUsers = state.users.filter((item) => item.id !== action.id);
      return { ...state, users: newUsers };
    case EDIT_USER:
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [data, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <TodoProviderWrapper.Provider value={{ data, dispatch }}>
      {children}
    </TodoProviderWrapper.Provider>
  );
};
