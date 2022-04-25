import Todo from './Todo';

function TodoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      {/* {props.todoList.map(el => ( */}
      <Todo id={'111111'} title={'aaaaaa'} completed={true} />
      {/* ))} */}
    </ul>
  );
}

export default TodoList;
