function PageLimit() {
  return (
    <div className="d-flex align-items-center mt-4">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: '5rem' }}
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}

export default PageLimit;
