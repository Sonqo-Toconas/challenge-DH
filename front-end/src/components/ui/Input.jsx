import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className="d-inline-block">
      <form action={props.route} method="POST">
        <label htmlFor={props.name}>
          <div className="">
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            className="form-control border border-black rounded-0" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
          />
          </div>
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {
  route: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
