import Button from '../ui/Button';

function TodoInput() {
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new todo"
        />
        <Button color="success">
          <i className="fa-solid fa-plus" />
        </Button>
        <Button color="outline-secondary">
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </>
  );
}

export default TodoInput;
