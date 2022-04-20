import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/todo-list/TodoInput';
import Filter from './components/filter/Filter';
import PageLimit from './components/page-limit/PageLimit';
import TodoList from './components/todo-list/TodoList';
import Pagination from './components/pagination/Pagination';

const initialTodoList = [
  { title: 'Sport', completed: true, id: uuidv4() },
  { title: 'Gaming', completed: false, id: uuidv4() },
  { title: 'Entertain', completed: true, id: uuidv4() }
];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);

  const createTodo = title => {
    const newTodo = { title, completed: false, id: uuidv4() };
    // const oldTodoList = [...todoList];
    // oldTodoList.unshift(newTodo);
    // setTodoList(oldTodoList);

    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter />
      <PageLimit />
      <TodoList todoList={todoList} />
      <Pagination />
    </div>
  );
}

export default App;
