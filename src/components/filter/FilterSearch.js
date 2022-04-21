import Button from '../ui/Button';

function FilterSearch(props) {
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={props.searchTerm}
        onChange={event => props.changeSearchTerm(event.target.value)}
      />
      <Button color="dark" onClick={() => props.changeSearchTerm('')}>
        <i className="fa-solid fa-xmark" />
      </Button>
    </div>
  );
}

export default FilterSearch;
