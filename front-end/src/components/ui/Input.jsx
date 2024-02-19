import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      <form action={props.route} method="POST">
        <label htmlFor={props.name}>
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
          />
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
