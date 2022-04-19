import PageList from './PageList';

function Pagination() {
  return (
    <div className="mt-2 d-flex align-items-center justify-content-between">
      <small className="text-muted">Showing 1 to 10 of 96 entries</small>
      <PageList />
    </div>
  );
}

export default Pagination;
