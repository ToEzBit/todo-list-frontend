function RadioButton(props) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={props.name}
        id={props.id}
      />
      <label
        className={`btn btn-${props.color || 'outline-primary'} shadow-none`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </>
  );
}

export default RadioButton;
