import { createContext, useState, useEffect } from "react";
import {
  getAllTodoAPI,
  createTodoAPI,
  removeTodoAPI,
  updateTodoApi,
} from "../api/todoApi";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  const createTodo = (title) => {
    const fetch = async () => {
      try {
        const res = await createTodoAPI(title);
        const newTodo = res.todo;
        const newTodoList = [newTodo, ...todoList];
        setTodoList(newTodoList);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  };

  const removeTodo = (id) => {
    const fetch = async () => {
      try {
        await removeTodoAPI(id);
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const clonedTodoList = [...todoList];
          clonedTodoList.splice(idx, 1);
          setTodoList(clonedTodoList);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  };

  const updateTodo = (newValue, id) => {
    const fetch = async () => {
      try {
        await updateTodoApi(id, newValue);
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const clonedTodoList = [...todoList];
          clonedTodoList[idx] = { ...clonedTodoList[idx], ...newValue };
          setTodoList(clonedTodoList);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllTodoAPI();
        setTodoList(res.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todoList, createTodo, removeTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
