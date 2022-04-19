function PageItem(props) {
  return (
    <li
      className={`page-item ${props.active ? 'active' : ''} ${
        props.disabled ? 'disabled' : ''
      }`}
    >
      <button className="page-link shadow-none">{props.children}</button>
    </li>
  );
}

export default PageItem;
