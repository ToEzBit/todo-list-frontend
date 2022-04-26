import { useState, useContext } from 'react';
import Button from '../ui/Button';
import TodoInput from './TodoInput';
import { TodoContext } from '../../contexts/TodoContext';

function Todo(props) {
  const { id, title, completed } = props;
  const [isEditing, setIsEditing] = useState(false);

  const ctx = useContext(TodoContext);

  const closeEditing = () => {
    setIsEditing(false);
  };

  return (
    <li
      className={`list-group-item d-flex ${
        isEditing ? 'flex-column' : 'align-items-center'
      } p-3 bd-callout bd-callout-${completed ? 'success' : 'warning'}`}
    >
      {isEditing ? (
        <TodoInput
          id={id}
          title={title}
          completed={completed}
          closeEditing={closeEditing}
        />
      ) : (
        <>
          <span
            className="flex-grow-1"
            role="button"
            onClick={() => setIsEditing(true)}
          >
            {title}
          </span>
          <div className="btn-group">
            <Button
              color="outline-info"
              onClick={() =>
                ctx.updateTodo({ title, completed: !completed }, id)
              }
            >
              <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
            </Button>
            <Button color="danger" onClick={() => ctx.removeTodo(id)}>
              <i className="fa-regular fa-trash-can" />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
