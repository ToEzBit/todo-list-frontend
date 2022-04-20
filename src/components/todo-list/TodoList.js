import Todo from './Todo';

function TodoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      {props.todoList.map(el => (
        <Todo key={el.id} title={el.title} completed={el.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
