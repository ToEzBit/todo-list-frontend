import React from "react";
import { TodoContextProvider } from "../../contexts/TodoContext";
import TodoInput from "../todo-list/TodoInput";
import TodoList from "../todo-list/TodoList";

function Home() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  );
}

export default Home;
