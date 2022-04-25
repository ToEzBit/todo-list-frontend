import { useState } from 'react';
import Button from '../ui/Button';
import TodoInput from './TodoInput';

function Todo(props) {
  const { id, title, completed } = props;
  const [isEditing, setIsEditing] = useState(false);

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
            <Button color="outline-info">
              <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
            </Button>
            <Button color="danger">
              <i className="fa-regular fa-trash-can" />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
