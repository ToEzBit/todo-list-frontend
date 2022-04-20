import { useState } from 'react';
import Button from '../ui/Button';

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState('');
  const [todoError, setTodoError] = useState('');

  const handleClickCreateBtn = () => {
    if (!todoInput) {
      setTodoError('Title is required.');
    } else {
      props.createTodo(todoInput);
      setTodoError('');
      setTodoInput('');
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
        <Button color="success" onClick={handleClickCreateBtn}>
          <i className="fa-solid fa-plus" />
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput('')}>
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {todoError && <small className="text-danger">{todoError}</small>}
    </>
  );
}

export default TodoInput;
