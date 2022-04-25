import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import TodoInput from './components/todo-list/TodoInput';
import Filter from './components/filter/Filter';
import PageLimit from './components/page-limit/PageLimit';
import TodoList from './components/todo-list/TodoList';
import Pagination from './components/pagination/Pagination';

// ALL => null
// COMPLETED => true
// PENDING => false

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get('http://localhost:8080/todos');
        setTodoList(res.data.todos);
      };
      fetchTodos();
    } catch (err) {
      console.log(err);
    }

    // axios
    //   .get('http://localhost:8080/todos')
    //   .then(res => {
    //     setTodoList(res.data.todos);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  const createTodo = async title => {
    try {
      const newTodo = { title, completed: false };
      const res = await axios.post('http://localhost:8080/todos', newTodo);
      // const res1 = await axios.get('http://localhost:8080/todos');
      // setTodoList(res1.data.todos);
      const newTodoList = [res.data.todo, ...todoList];
      setTodoList(newTodoList);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = async id => {
    try {
      await axios.delete('http://localhost:8080/todos/' + id);
      // const res = await axios.get('http://localhost:8080/todos');
      // setTodoList(res.data.todos);
    } catch (err) {
      console.log(err);
    }

    const idx = todoList.findIndex(el => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList.splice(idx, 1);
      setTodoList(oldTodoList);
    }
  };

  const updateTodo = async (newValue, id) => {
    await axios.put(`http://localhost:8080/todos/${id}`, newValue);
    const idx = todoList.findIndex(el => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList[idx] = { ...oldTodoList[idx], ...newValue };
      setTodoList(oldTodoList);
    }
  };

  const changeSearchStatus = value => {
    setSearchStatus(value);
  };

  const changeSearchTerm = value => {
    setSearchTerm(value);
  };

  // let filteredTodoList = [];
  // switch (searchStatus) {
  //   case 'COMPLETED': {
  //     filteredTodoList = todoList.filter(el => el.completed);
  //     break;
  //   }
  //   case 'PENDING': {
  //     filteredTodoList = todoList.filter(el => !el.completed);
  //     break;
  //   }
  //   default:
  //     filteredTodoList = [...todoList];
  // }

  const filteredTodoList = todoList.filter(
    el =>
      (searchStatus === null || el.completed === searchStatus) &&
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filteredTodoList2 = filteredTodoList.filter(el =>
  //   el.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter
        changeSearchStatus={changeSearchStatus}
        searchStatus={searchStatus}
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
      />
      <PageLimit />
      <TodoList
        todoList={filteredTodoList}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <Pagination />
    </div>
  );
}

export default App;
