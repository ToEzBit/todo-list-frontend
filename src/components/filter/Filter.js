import FilterSearch from './FilterSearch';
import FilterStatus from './FilterStatus';

function Filter(props) {
  return (
    <div className="mt-4 d-flex">
      <FilterSearch
        changeSearchTerm={props.changeSearchTerm}
        searchTerm={props.searchTerm}
      />
      <FilterStatus
        changeSearchStatus={props.changeSearchStatus}
        searchStatus={props.searchStatus}
      />
    </div>
  );
}

export default Filter;
