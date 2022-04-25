import { useState } from 'react';
import Button from '../ui/Button';

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState(props.title || '');
  const [todoError, setTodoError] = useState('');

  const handleClickCreateBtn = () => {
    if (!todoInput) {
      setTodoError('Title is required.');
    } else {
      // props.createTodo(todoInput);
      setTodoError('');
      setTodoInput('');
    }
  };

  const handleClickUpdateBtn = () => {
    if (!todoInput) {
      setTodoError('Title is required.');
    } else {
      // props.updateTodo(
      //   { title: todoInput, completed: props.completed },
      //   props.id
      // );
      props.closeEditing();
    }
  };

  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className={`form-control ${todoError ? 'is-invalid' : ''}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={event => setTodoInput(event.target.value)}
        />
        {props.id ? (
          <Button color="primary" onClick={handleClickUpdateBtn}>
            <i className="fa-solid fa-check" />
          </Button>
        ) : (
          <Button color="success" onClick={handleClickCreateBtn}>
            <i className="fa-solid fa-plus" />
          </Button>
        )}
        <Button
          color="outline-secondary"
          onClick={() => {
            if (props.id) {
              props.closeEditing();
            } else {
              setTodoInput('');
            }
          }}
        >
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {todoError && <small className="text-danger">{todoError}</small>}
    </>
  );
}

export default TodoInput;
