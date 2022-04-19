import Todo from './Todo';

function TodoList() {
  return (
    <ul className="list-group shadow mt-4">
      <Todo title="Homework" completed={true} />
      <Todo title="Personal project figma" completed={false} />
      <Todo title="Mid term exam" completed={false} />
      <Todo title="Lab" completed={true} />
    </ul>
  );
}

export default TodoList;
